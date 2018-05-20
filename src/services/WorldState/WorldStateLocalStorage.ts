import { injectable } from 'inversify'

import WorldState, { StateKey } from './index'

const STATE_KEY = 'STATE-'

const badThreshold = 35
const normalThreshold = 65

const texts = {
    money: {
        bad: 'Видимо, мы свернули не туда!',
        normal: 'Перемен требуют наши сердца!',
        good: 'Верным путем идем, Темнейший!',
    },
    people: {
        bad: 'Скоро работать придется батенька(.',
        normal: 'В нашем царстве нету лишних ртов!',
        good: 'Рабов мало не бывает. Продолжаем в том же духе!',
    },
    internalOpinion: {
        bad: 'Нам нужно больше хлеба и зрелищ!',
        normal: 'Стоит добавить красок в эту серую картину.',
        good: 'Верным путем идем товарищи!',
    },
    externalOpinion: {
        bad: 'Зря вы отобрали у всех игрушки в песочнице.',
        normal: 'Нас не жаждют, но и не выгонят из-за стола!',
        good: 'У вас появились новые друзья! Друзей мало не бывает!',
    },
}

const endScreen = {
    autocracy: `Автократический стиль управления менеджмента Автократический стиль характеризуется высокой
                степенью централизации власти руководителя. Это директивный стиль, означающий большую свободу
                руководителя в выборе средств воздействия при слабом контроле.`,

    democracy: `Демократический стиль руководства Демократический стиль характеризуется предоставлением
                подчиненным самостоятельности в пределах выполняемых ими функций и их квалификации.
                Это коллегиальный стиль, который дает большую свободу
                деятельности подчиненных под контролем руководителя.`,

    liberalism: `Либеральный (несмешивающийся) стиль руководства характеризуется тем, что подчиненные имеют
                 свободу принимать собственные решения. Им предоставляется почти полная свобода
                 в определении своих целей и в контроле за своей работой.`,
}

const initialState = {
    money: 70,
    people: 60,
    internalOpinion: 50,
    externalOpinion: 10,
}

const callbacks = {}

@injectable()
export default class WorldStateLocalStorage implements WorldState {
    public constructor() {
        const state = localStorage.getItem(STATE_KEY)

        if (!state) {
            localStorage.setItem(STATE_KEY, JSON.stringify(initialState))
        }
    }

    public getMoney() {
       return this.getStateDescription('money')
    }

    public getPeople() {
        return this.getStateDescription('people')
    }

    public getInternalOpinion() {
        return this.getStateDescription('internalOpinion')
    }

    public getExternalOpinion() {
        return this.getStateDescription('externalOpinion')
    }

    public addRefreshCallback(key: StateKey, callback: () => void) {
        callbacks[key] = callbacks[key] || []
        callbacks[key].push(callback)
    }

    // tslint:disable-next-line:ban-types
    public applyChanges(patch: Object) {
        const state = this.getState()

        for (const key of Object.keys(patch)) {

            const change = patch[key]
            const value = change.substr(1)

            switch (change[0]) {
                case '=':
                    state[key] = parseInt(value, 10)
                    break
                case '+':
                    state[key] = parseInt(state[key] || 0, 10) + parseInt(value, 10)
                    break
                case '-':
                    state[key] = parseInt(state[key] || 0, 10) - parseInt(value, 10)
                    break
            }
        }

        this.setState(state)
    }

    public getEndScreen() {
        const state = this.getState()

        const rulingStyles = ['autocracy', 'democracy', 'liberalism']

        const maxAttribute = Math.max.apply(rulingStyles.map((x: string) => state[x]))

        return (endScreen[rulingStyles.find((x: string) => !state[x] === maxAttribute) || 'autocracy']) as string
    }

    public getState() {
        return JSON.parse(localStorage.getItem(STATE_KEY) || '{}') || initialState
    }

    // tslint:disable-next-line:ban-types
    public setState(state: Object) {
        const oldState = this.getState()

        localStorage.setItem(STATE_KEY, JSON.stringify(Object.assign({}, oldState, state)))

        for (const key in state) {
            if (state[key] !== oldState[key] && callbacks[key]) {
                callbacks[key].forEach((x: () => void) => x())
            }
        }
    }

    private getStateFieldFromStorage(key: string) {
        return this.getState()[key] || 0
    }

    private getStateDescription(key: string) {
        const state = this.getStateFieldFromStorage(key)
        const text = texts[key]

        return state <= badThreshold
            ? text.bad
            : state <= normalThreshold
                ? text.normal
                : text.good
    }

}

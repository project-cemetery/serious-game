import { injectable } from 'inversify'

import WorldState, { StateKey } from './index'

const STATE_KEY = 'STATE-'

const badThreshold = 35
const normalThreshold = 65

const texts = {
    money: {
        bad: 'Всё плохо',
        normal: 'Всё как всегда',
        good: 'Путин - президент мира',
    },
    people: {
        bad: 'Всё плохо',
        normal: 'Всё как всегда',
        good: 'Путин - президент мира',
    },
    internalOpinion: {
        bad: 'Всё плохо',
        normal: 'Всё как всегда',
        good: 'Путин - президент мира',
    },
    externalOpinion: {
        bad: 'Всё плохо',
        normal: 'Всё как всегда',
        good: 'Путин - президент мира',
    },
}

const endScreen = {
    'autocracy': `Автократический стиль управления менеджмента Автократический стиль характеризуется высокой 
                  степенью централизации власти руководителя. Это директивный стиль, означающий большую свободу 
                  руководителя в выборе средств воздействия при слабом контроле.`,

    'democracy': `Демократический стиль руководства Демократический стиль характеризуется предоставлением 
                  подчиненным самостоятельности в пределах выполняемых ими функций и их квалификации. 
                  Это коллегиальный стиль, который дает большую свободу 
                  деятельности подчиненных под контролем руководителя.`,

    'liberalism': `Либеральный (несмешивающийся) стиль руководства характеризуется тем, что подчиненные имеют 
                   свободу принимать собственные решения. Им предоставляется почти полная свобода 
                   в определении своих целей и в контроле за своей работой.`
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
                    state[key] = value
                    break
                case '+':
                    state[key] += value
                    break
                case '-':
                    state[key] -= value
                    break
            }
        }

        this.setState(state)
    }

    public getEndScreen() {
        const state = getState()

        const rulingStyles = ['autocracy', 'democracy', 'liberalism']

        const maxAttribute = Math.max.apply(rulingStyles.map((x: string) => state[x]))

        return endScreen[rulingStyles.find((x: string) => state[x] === maxAttribute)]
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

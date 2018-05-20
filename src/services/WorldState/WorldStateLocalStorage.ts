import { injectable } from 'inversify'

import WorldState from './index'

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

const initialState = {
    money: 0,
    people: 0,
    internalOpinion: 0,
    externalOpinion: 0,
}

@injectable()
export default class WorldStateLocalStorage implements WorldState {
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

    public getState() {
        const state = localStorage.getItem(STATE_KEY)

        if (state) {
            return state
        } else {
            this.setState(initialState)
            return initialState as any // TODO: fix it!
        }
    }

    // tslint:disable-next-line:ban-types
    public setState(state: Object) {
        const oldState = this.getState()

        localStorage.setItem(STATE_KEY, JSON.stringify(Object.assign({}, oldState, state)))
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

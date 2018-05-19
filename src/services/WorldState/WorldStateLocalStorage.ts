import { injectable } from 'inversify'

import WorldState from './WorldState'

const STATE_KEY = 'STATE-'

const initialState = {
    money: 0,
    people: 0,
    internalOpinion: 0,
    externalOpinion: 0
}

@injectable()
export default class WorldStateLocalStorage implements WorldState {
    public getMoney() {
       return this.getStateFieldFromStorage('money') || 0
    }

    public getPeople() {
        return this.getStateFieldFromStorage('people') || 0
    }

    public getInternalOpinion() {
        return this.getStateFieldFromStorage('internalOpinion') || 0
    }

    public getExternalOpinion() {
        return this.getStateFieldFromStorage('externalOpinion') || 0
    }

    public getState() {
        const state = localStorage.getItem(STATE_KEY)

        if (state) {
            this.setState(initialState)
            return initialState
        } else {
            return state
        }
    }


    public setState(state: Object) {
        const oldState = this.getState()

        localStorage.setItem(STATE_KEY, JSON.stringify(Object.assign({}, oldState, state)))
    }

    private getStateFieldFromStorage(key: string) {
        return this.getState()[key]
    }

}


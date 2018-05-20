import { ReactNode } from 'react'

export enum StateKey {
    PEOPLE = 'people',
    MONEY = 'money',
    INTERNAL_OPINION = 'internal_opinion',
    EXTERNAL_OPINION = 'external_opinion',
}

export default interface WorldState {
    getPeople(): string
    getMoney(): string
    getInternalOpinion(): string
    getExternalOpinion(): string

    addRefreshCallback(key: StateKey, callback: () => void): void

    getStartScreen(): ReactNode | string
    getEndScreen(): ReactNode | string

    // tslint:disable-next-line:ban-types
    applyChanges(patch: Object): void
    // tslint:disable-next-line:ban-types
    getState(): Object
    // tslint:disable-next-line:ban-types
    setState(state: Object): void
}

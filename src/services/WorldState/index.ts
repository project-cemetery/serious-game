export enum StateKey {
    PEOPLE = 'people',
    MONEY = 'money',
    INTERNAL_OPTINION = 'internal_opinion',
    EXTERNAL_OPINION = 'external_opinion',
}

export default interface WorldState {
    getPeople(): string
    getMoney(): string
    getInternalOpinion(): string
    getExternalOpinion(): string

    setRefreshCallback(key: StateKey, callback: () => void): void

    // tslint:disable-next-line:ban-types
    getState(): Object
    // tslint:disable-next-line:ban-types
    setState(state: Object): void
}

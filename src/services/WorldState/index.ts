export default interface WorldState {

    getPeople(): string
    getMoney(): string
    getInternalOpinion(): string
    getExternalOpinion(): string

    // tslint:disable-next-line:ban-types
    getState(): Object
    // tslint:disable-next-line:ban-types
    setState(state: Object): void
}

export default interface WorldState {

    getPeople(): number
    getMoney(): number
    getInternalOpinion(): number
    getExternalOpinion(): number

    // tslint:disable-next-line:ban-types
    getState(): Object
    // tslint:disable-next-line:ban-types
    setState(state: Object): void
}
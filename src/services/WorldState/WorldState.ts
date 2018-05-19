export default interface WorldState {

    getPeople(): number
    getMoney(): number
    getInternalOpinion(): number
    getExternalOpinion(): number

    getState(): Object
    setState(state: Object): void

}
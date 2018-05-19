export default interface Action {
    title: string
    description: string
    // tslint:disable-next-line:ban-types
    consequences: Function
}

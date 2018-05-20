export default interface Event {
    title: string
    description: string
    options: Option[]
}

export interface Option {
    title: string
    description: string
    // tslint:disable-next-line:ban-types
    consequences: Function
}

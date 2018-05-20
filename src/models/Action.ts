export default interface Action {
    title: string
    description: string
    // tslint:disable-next-line:ban-types
    consequences: Function
    slider?: Slider
}

export interface Slider {
    min: number
    max: number
}

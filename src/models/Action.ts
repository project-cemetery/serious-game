export default interface Action {
    title: string
    description: string
    body: string
    consequences: (v?: number) => void
    slider?: Slider
}

export interface Slider {
    min: number
    max: number
}

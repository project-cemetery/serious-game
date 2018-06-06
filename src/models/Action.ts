export default interface Action {
    id: string
    title: string
    description: string
    body: string
    consequences: (sliderValue?: number) => string
    slider?: {
        min: number,
        max: number,
    }
}

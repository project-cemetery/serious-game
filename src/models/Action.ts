import WorldState from '../services/WorldState'

export default interface Action {
    title: string
    description: string
    used: boolean
    body: string
    consequences: (state: WorldState, slider?: number) => void
    slider?: Slider
}

export interface Slider {
    min: number
    max: number
}

import { ReactNode } from 'react'

import WorldState from '../services/WorldState'

export default interface Action {
    title: string
    description: string
    used: boolean
    body: ReactNode | string
    consequences: (state: WorldState, slider?: number) => string
    slider?: Slider
}

export interface Slider {
    min: number
    max: number
}

import WorldState from '../services/WorldState'

export default interface Event {
    title: string
    description: string
    options: Option[]
}

export interface Option {
    title: string
    description: string
    consequences: (state: WorldState) => string
}

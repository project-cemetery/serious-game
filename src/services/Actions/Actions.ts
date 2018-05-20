import ActionsInterface from './index'

const actions = [
    {
        title: 'Решение',
        description: 'Описание',
        // tslint:disable-next-line:ban-types
        consequences: (state: Object) => state,
        slider: { min: 0, max: 10 }
    },
]

export default class Actions implements ActionsInterface {
    public getActions() {
        return actions
    }
}

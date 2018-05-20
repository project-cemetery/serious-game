import ActionsInterface from './index'

export default class Actions implements ActionsInterface {
    public getActions() {
        return [
            {
                title: 'Решение',
                description: 'Описание',
                // tslint:disable-next-line:ban-types
                consequences: (state: Object) => state,
            },
        ]
    }
}

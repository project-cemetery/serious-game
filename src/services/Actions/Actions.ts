import Action from '../../models/Action'

export interface ActionsInterface {

    getActions(): Action[]

}

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

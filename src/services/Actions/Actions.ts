import Action from "models/Action";

export interface Actions {

    getActions(): Action[]

}

export default class Actions implements Actions {
    getActions() {
        return [
            {
                title: 'Решение',
                description: 'Описание',
                consequences: (state: Object) => state,
            }
        ]
    }
}
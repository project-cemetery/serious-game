import Event from "models/Event";

export interface Events {

    getNext(): Event

}

export default class Events implements Events {
    getNext() {
        return {
            title: 'Событие',
            description: 'Описание',
            options: [
                {title: 'Опция 1', consequences: (state: Object) => state},
                {title: 'Опция 2', consequences: (state: Object) => state},
            ]

        }
    }
}

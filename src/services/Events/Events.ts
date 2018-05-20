import EventsInterface from './index'

const events = [
    {
        title: 'Событие',
        description: 'Описание',
        options: [
            // tslint:disable-next-line:ban-types
            { title: 'Опция 1', description: 'Описание', consequences: (state: Object) => state },
            // tslint:disable-next-line:ban-types
            { title: 'Опция 2', description: 'Описание', consequences: (state: Object) => state },
        ],

    },
]

export default class Events implements EventsInterface {
    public getNext() {
        return events[0]
    }
}

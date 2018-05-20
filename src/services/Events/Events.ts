import { injectable } from 'inversify'

import EventsInterface from './index'

const events = [
    {
        title: 'Событие',
        description: 'Описание',
        options: [
            // tslint:disable-next-line:no-console
            { title: 'Опция 1', description: 'Описание', consequences: () => console.log('option 1') },
            // tslint:disable-next-line:no-console
            { title: 'Опция 2', description: 'Описание', consequences: () => console.log('option 2') },
            // tslint:disable-next-line:no-console
            { title: 'Опция 3', description: 'Описание', consequences: () => console.log('option 3') },
            // tslint:disable-next-line:no-console
            { title: 'Опция 4', description: 'Описание', consequences: () => console.log('option 4') },
        ],
    },
]

@injectable()
export default class Events implements EventsInterface {
    public getNext() {
        return events[0]
    }
}

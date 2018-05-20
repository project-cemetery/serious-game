import Event from '../../models/Event'

export default interface EventsInterface {

    getNext(): Event | undefined

}

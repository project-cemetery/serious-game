import {Container} from 'inversify'

import TYPES from './types'

import Actions from './Actions/Actions'
import ActionsInterface from './Actions'

import Events from './Events/Events'
import EventsInterface from './Events'

import WorldStateLocalStorage from './WorldState/WorldStateLocalStorage'
import WoldState from './WorldState'

const container = new Container()

container.bind<ActionsInterface>(TYPES.Actions).to(Actions)
container.bind<EventsInterface>(TYPES.Events).to(Events)
container.bind<WoldState>(TYPES.WorldState).to(WorldStateLocalStorage)

export default container
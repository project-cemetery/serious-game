import { Container } from 'inversify'

import TYPES from './types'

import ActionsInterface from './Actions'
import Actions from './Actions/Actions'

import EventsInterface from './Events'
import Events from './Events/Events'

import NewsInterface from './News'
import News from './News/News'

import WoldState from './WorldState'
import WorldStateLocalStorage from './WorldState/WorldStateLocalStorage'

const container = new Container()

container.bind<WoldState>(TYPES.WorldState).to(WorldStateLocalStorage)
container.bind<ActionsInterface>(TYPES.Actions).to(Actions)
container.bind<EventsInterface>(TYPES.Events).to(Events)
container.bind<NewsInterface>(TYPES.News).to(News)

export default container

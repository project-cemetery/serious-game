import { Container } from 'inversify'

import TYPES from './types'
import WorldStateDeterminator, { DefaultWorldStateDeterminator } from './WorldStateDeterminator'

const container = new Container()

container.bind<WorldStateDeterminator>(TYPES.WorldStateDeterminator).to(DefaultWorldStateDeterminator)

export default container

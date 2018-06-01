import { injectable } from 'inversify'

export default interface WorldStateDeterminator {
    getBrief(): string
}

@injectable()
export class DefaultWorldStateDeterminator implements WorldStateDeterminator {
    public getBrief() {
        return 'Hello!'
    }
}

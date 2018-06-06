import * as React from 'react'

import ActionModel from '@app/models/Action'

import Container from './ActionContainer'

export interface Props {
    action: ActionModel
}

export class Action extends React.PureComponent<Props> {

    public render() {
        const { action } = this.props

        return (
            <p>{action.title}</p>
        )
    }
}

export default Container(Action)

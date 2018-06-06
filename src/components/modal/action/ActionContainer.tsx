import * as React from 'react'
import { connect } from 'react-redux'

import Action from '@app/models/Action'
import { AppState } from '@app/reducers'

import { Props as ComponentProps } from './Action'

interface Props {
    action?: Action
}

export default function(Component: React.ComponentClass<ComponentProps>) {

    type ConatinerProps = Props

    @(connect(mapStateToProps) as any)
    class Wrapped extends React.Component<ConatinerProps> {

        public render() {
            const { action } = this.props

            return <Component action={action!} />
        }
    }

    return Wrapped
}

const mapStateToProps = (state: AppState) => ({
    action: {
        id: '432423-fdsf',
        title: 'Hello',
        description: 'World',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        consequences: (sliderValue?: number) => 'activate!',
    },
})

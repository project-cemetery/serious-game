import * as React from 'react'
import { connect } from 'react-redux'

import modalActions, { ModalEnum } from '@app/store/modal/actions'

import Action from '@app/models/Action'
import { Props as ComponentProps } from './Actions'

interface Props {
    show?: (modal: ModalEnum, id?: string) => void
}

export default function(Component: React.ComponentClass<ComponentProps>) {

    type ConatinerProps = Props

    @(connect(null, { ...modalActions }) as any)
    class Wrapped extends React.Component<ConatinerProps> {

        public render() {
            const actions = [
                {
                    id: '432423-fdsf',
                    title: 'Hello',
                    description: 'World',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
                    consequences: (sliderValue?: number) => 'activate!',
                },
            ]

            return <Component
                actions={actions}
                openAction={this.openAction}
            />
        }

        private openAction = (action: Action) => this.props.show!(ModalEnum.ACTION, action.id)
    }
    return Wrapped
}

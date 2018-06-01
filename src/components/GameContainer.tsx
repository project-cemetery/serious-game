import * as React from 'react'
import { connect } from 'react-redux'

import modalActions, { ModalEnum } from '@app/store/modal/actions'

import { Props as ComponentProps } from './Game'

interface Props {
    show?: (modal: ModalEnum) => void
}

export default function(Component: React.ComponentClass<ComponentProps>) {

    type ConatinerProps = Props

    @(connect(null, { ...modalActions }) as any)
    class Wrapped extends React.Component<ConatinerProps> {

        public render() {
            const { show } = this.props

            return <Component showBrief={() => show!(ModalEnum.BRIEF)} />
        }
    }

    return Wrapped
}

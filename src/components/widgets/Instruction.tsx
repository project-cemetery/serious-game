import * as React from 'react'

import container from '../../services'
import TYPES from '../../services/types'
import StateService from '../../services/WorldState'
import GenericModal from './common/GenericModal'
import SecretaryAudio from './common/SecretaryAudio'

interface State {
    open: boolean
    report?: any
}

const secretaryAvatar = require('../../assets/secretary.png')

export default class Instruction extends React.Component<{}, State> {

    public state = {
        open: true,
        report: undefined,
    } as State

    public render() {
        return (
            <GenericModal
                image={secretaryAvatar}
                title="Севернее Кореи"
                open={this.state.open}
                closeModal={() => this.setState({ open: false })}
            >
                {this.state.report}

                {this.state.open && <SecretaryAudio />}
            </GenericModal>
        )
    }

    public componentDidMount() {
        this.setState({
            report: container.get<StateService>(TYPES.WorldState).getStartScreen(),
        })
    }
}

import * as React from 'react'
import { connect } from 'react-redux'

import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

import { AppState } from '../../reducers'
import modalActions, { ModalActions, ModalEnum } from '../../store/modal/actions'

import BriefModal from './brief/Brief'

const MODAL_COMPONENTS = {
    [ModalEnum.BRIEF]: BriefModal,
}

interface Props {
    visible?: boolean
    type?: ModalEnum
}

@(connect(mapStateToProps, {...modalActions}) as any)
export default class ModalRoot extends React.Component<Props & ModalActions> {

    public render() {
        const { visible, type, hide } = this.props

        if (!type) { return null }

        const SpecificModalContent = (MODAL_COMPONENTS as any)[type]

        return (
            <Modal
                disableAutoFocus
                open={!!visible} onClose={hide!}
                style={{ width: '70vw', height: '60vh', top: '15vh', left: '15vw' }}
            >
                <Paper style={{ width: '100%', height: '100%', padding: '2rem' }}>
                    <SpecificModalContent />
                </Paper>
            </Modal>
        )
    }
}

function mapStateToProps(state: AppState) {
    return {
        visible: state.modal.show,
        type: state.modal.type,
    }
}

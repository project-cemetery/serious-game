import * as React from 'react'

import { css } from 'emotion'

import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

interface Props {
    open: boolean
    title: string

    children?: any

    image?: string
    closeModal?: () => void
}

const styles = {
    avatar: css`
        margin-right: 1rem;
        margin-bottom: 1rem;
        float: left;
        max-width: 30%;
    `,
}

export default class GenericModal extends React.Component<Props, {}> {

    public render() {
        return (
            <Modal
                disableAutoFocus
                style={{ width: '70vw', height: '60vh', top: '15vh', left: '20vw' }}
                open={this.props.open}
                onClose={this.handleClose}
            >
                <Paper style={{ width: '100%', height: '100%', padding: '2rem' }}>
                    <Typography variant="title" gutterBottom style={{ marginBottom: '1rem' }}>
                        {this.props.title}
                    </Typography>
                    {this.props.image && <img
                        className={styles.avatar}
                        src={this.props.image}
                        alt={this.props.title}
                    />}
                    {this.props.children}
                </Paper>
            </Modal>
        )
    }

    private handleClose = () => this.props.closeModal && this.props.closeModal()
}

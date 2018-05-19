import * as React from 'react'

import { css } from 'emotion'

import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

interface Props {
    open: boolean
    closeModal: () => void
    title: string
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
                style={{ width: '80vw', height: '80vh', top: '5vh', left: '10vw' }}
                open={this.props.open}
                onClose={this.handleClose}
            >
                <Paper style={{ width: '100%', height: '100%', padding: '2rem' }}>
                    <Typography variant="title" gutterBottom style={{ marginBottom: '1rem' }}>
                        {this.props.title}
                    </Typography>
                    <img
                        className={styles.avatar}
                        src="https://picsum.photos/300/300"
                        alt={this.props.title}
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Paper>
            </Modal>
        )
    }

    private handleClose = () => this.props.closeModal()
}

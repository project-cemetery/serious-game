import * as React from 'react'

import Button from '@material-ui/core/Button'

import { css } from 'emotion'

import GenericModal from './common/GenericModal'

interface State {
    modalIsOpen: boolean
}

const styles = {
    footer: css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 2rem;

        width: calc(100% - 4rem);
        position: absolute;
        bottom: -2rem;
    `,
}

export default class Event extends React.PureComponent<{}, State> {

    public state = {
        modalIsOpen: false,
    } as State

    public render() {
        return (
            <React.Fragment>
                <Button
                    variant="raised"
                    color="secondary"
                    onClick={this.handleNexWeek}
                >
                    Завершить неделю
                </Button>

                <GenericModal
                    title="jkj"
                    open={this.state.modalIsOpen}
                >

                    <footer className={styles.footer}>
                        <Button
                            variant="outlined"
                            // tslint:disable-next-line:no-console
                            onClick={this.handleDecision(() => console.log('ok'))
                        }>
                            Решить первым образом
                        </Button>
                        <Button
                            variant="outlined"
                            // tslint:disable-next-line:no-console
                            onClick={this.handleDecision(() => console.log('ok'))
                        }>
                            Решить вторым образом
                        </Button>
                        <Button
                            variant="outlined"
                            // tslint:disable-next-line:no-console
                            onClick={this.handleDecision(() => console.log('ok'))
                        }>
                            Решить третьим образом
                        </Button>
                    </footer>
                </GenericModal>
            </React.Fragment>
        )
    }

    private handleNexWeek = () => {
        // get new event

        this.setState({ modalIsOpen: true })
    }

    private handleDecision = (eventResolve: () => void) => () => {
        this.setState({ modalIsOpen: false })

        eventResolve()
    }
}

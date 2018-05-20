import * as React from 'react'

import Button from '@material-ui/core/Button'

import { css } from 'emotion'

import GenericModal from './common/GenericModal'

import EventModel, { Option as OptionModel } from '../../models/Event'
import container from '../../services'
import EventsService from '../../services/Events'
import TYPES from '../../services/types'

interface State {
    event?: EventModel
    modalIsOpen: boolean
}

const styles = {
    footer: css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;

        width: calc(100% - 4rem);
        position: absolute;
        bottom: -2rem;
    `,
}

export default class Event extends React.PureComponent<{}, State> {

    public state = {
        event: undefined,
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

                {this.state.event &&
                    <GenericModal
                        title={this.state.event.title}
                        open={this.state.modalIsOpen}
                    >
                        <p>{this.state.event.description}</p>

                        <footer className={styles.footer}>
                            {this.state.event.options.map((option) =>
                                <Button
                                    variant="outlined"
                                    onClick={this.handleDecision(option)}
                                >
                                    {option.title}
                                </Button>,
                            )}
                        </footer>
                    </GenericModal>
                }
            </React.Fragment>
        )
    }

    private handleNexWeek = () => {
        this.setState({
            event: container.get<EventsService>(TYPES.Events).getNext(),
            modalIsOpen: true,
        })
    }

    private handleDecision = (option: OptionModel) =>
        () => {
            this.setState({ modalIsOpen: false })

            option.consequences()
        }
}

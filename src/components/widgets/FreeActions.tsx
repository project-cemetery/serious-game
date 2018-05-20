import * as React from 'react'

import { css } from 'emotion'
import Slider from 'rc-slider'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

import 'rc-slider/assets/index.css'

import ActionModel from '../../models/Action'
import container from '../../services'
import ActionsService from '../../services/Actions'
import TYPES from '../../services/types'
import WorldState from '../../services/WorldState'
import GenericModal from './common/GenericModal'

const secretaryAvatar = require('../../assets/secretary.png')
interface State {
    actions: ActionModel[]

    activeAction?: ActionModel
    actionIsOpen: boolean
    actionStrength: number

    report: string,
    reportIsOpen: boolean,
}

const styles = {
    slider: css`
        margin: 1rem 0;
    `,
}

export default class FreeActions extends React.PureComponent<{}, State> {

    public state = {
        actions: [],
        activeAction: undefined,
        actionIsOpen: false,
        actionStrength: 0,
        report: '',
        reportIsOpen: false,
    } as State

    public render() {
        return (
            <React.Fragment>

                <Paper style={{ opacity: 0.9 }}>
                    <List subheader={<ListSubheader>Действия</ListSubheader>}>
                        {this.state.actions.map((action) =>
                            <ListItem button onClick={this.activateAction(action)} key={action.title}>
                                <ListItemText primary={action.title} secondary={action.description} />
                            </ListItem>,
                        )}
                    </List>
                </Paper>

                {this.state.activeAction &&
                    <GenericModal
                        title={this.state.activeAction.title}
                        open={this.state.actionIsOpen}
                        closeModal={this.closeModal}
                    >
                        <p>{this.state.activeAction.body}</p>

                        {this.state.activeAction.slider &&
                            <Slider
                                trackStyle={{ backgroundColor: '#7f0000' }}
                                railStyle={{ backgroundColor: '#f05545' }}
                                handleStyle={{ backgroundColor: '#484848', borderColor: '#000' }}
                                min={this.state.activeAction.slider.min}
                                max={this.state.activeAction.slider.max}
                                defaultValue={0}
                                className={styles.slider}
                                onChange={this.handleSliderChange}
                            />
                        }
                        <Button onClick={() => {
                            this.applyAction()
                            this.updateActions()
                            this.closeModal()
                        }}>Применить</Button>
                    </GenericModal>
                }

                {this.state.report &&
                    <GenericModal
                        image={secretaryAvatar}
                        title="Отчет"
                        open={this.state.reportIsOpen}
                        closeModal={this.closeReport}
                    >
                        <p>{this.state.report}</p>
                    </GenericModal>
                }
            </React.Fragment>
        )
    }

    public componentDidMount() {
        container.get<ActionsService>(TYPES.Actions).setCallback(this.updateActions)

        this.updateActions()
    }

    private activateAction = (action: ActionModel) =>
        () => this.setState({
            activeAction: action,
            actionIsOpen: true,
        })

    private applyAction = () => {
        if (this.state.activeAction) {
            const report = this.state.activeAction.consequences(
                container.get<WorldState>(TYPES.WorldState),
                this.state.actionStrength,
            )

            this.setState({
                report,
                reportIsOpen: true,
            })
        }
    }

    private closeModal = () => this.setState({ actionIsOpen: false })

    private handleSliderChange = (value: any) =>
        this.setState({ actionStrength: parseInt(value, 10) })

    private updateActions = () => this.setState({
        actions: container.get<ActionsService>(TYPES.Actions).getActions(),
    })

    private closeReport = () => this.setState({ reportIsOpen: false })
}

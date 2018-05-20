import * as React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

import ActionModel from '../../models/Action'
import container from '../../services'
import ActionsService from '../../services/Actions'
import TYPES from '../../services/types'
import GenericModal from './common/GenericModal'

interface State {
    actions: ActionModel[]

    activeAction?: ActionModel
    actionIsOpen: boolean
}

export default class FreeActions extends React.PureComponent<{}, State> {

    public state = {
        actions: [],
        activeAction: undefined,
        actionIsOpen: false,
    } as State

    public render() {
        return (
            <React.Fragment>

                <Paper style={{ opacity: 0.9 }}>
                    <List subheader={<ListSubheader>Действия</ListSubheader>}>
                        {this.state.actions.map((action) =>
                            <ListItem button onClick={this.activateAction(action)}>
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
                    </GenericModal>
                }
            </React.Fragment>
        )
    }

    public componentDidMount() {
        this.setState({
            actions: container.get<ActionsService>(TYPES.Actions).getActions(),
        })
    }

    private activateAction = (action: ActionModel) =>
        () => this.setState({
            activeAction: action,
            actionIsOpen: true,
        })

    private closeModal = () => this.setState({ actionIsOpen: false })
}

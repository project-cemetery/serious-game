import * as React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

import Action from '@app/models/Action'

import Container from './ActionsContainer'

export interface Props {
    actions: Action[]
    openAction: (action: Action) => void
}

class Actions extends React.PureComponent<Props> {

    public render() {

        const { actions, openAction } = this.props

        return (
            <Paper>
                <List subheader={<ListSubheader>Действия</ListSubheader>}>
                    {actions.map((action) =>
                        <ListItem key={action.id} button onClick={() => openAction(action)}>
                            <ListItemText primary={action.title} secondary={action.description} />
                        </ListItem>,
                    )}
                </List>
            </Paper>
        )
    }
}

export default Container(Actions)

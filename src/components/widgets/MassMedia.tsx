import * as React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

export default class MassMedia extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <Paper>
                <List subheader={
                    <ListSubheader component="div">Новости</ListSubheader>
                }>
                    <ListItem>
                        <ListItemText primary="Trash" secondary="Все пропало" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Trash" secondary="Все пропало" />
                    </ListItem>
                </List>
            </Paper>
        )
    }
}

import * as React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

interface State {
    actions: any[]
}

export default class FreeActions extends React.PureComponent<{}, State> {

    public state = {
        actions: [],
    } as State

    public render() {
        const { actions } = this.state

        // tslint:disable-next-line:no-console
        console.log(actions)

        return (
            <Paper>
                <List subheader={
                    <ListSubheader component="div">Действия</ListSubheader>
                }>
                    <ListItem button>
                        <ListItemText primary="Законы" secondary="Издать репрессивный закон" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Налоги" secondary="Снизить налоги" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Подчиненные" secondary="Устроить ротацию губернаторов" />
                    </ListItem>
                </List>
            </Paper>
        )
    }

    public componentDidMount() {
        this.setState({
            actions: [
                { name: 'ok' },
            ],
        })
    }

}

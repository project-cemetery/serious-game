import * as React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

export default class MassMedia extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <Paper style={{ opacity: 0.9 }}>
                <List subheader={
                    <ListSubheader component="div">Новости</ListSubheader>
                }>
                    <ListItem>
                        <ListItemText
                            primary="РБК"
                            secondary="Полный состав нового российского правительства"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Meduza"
                            secondary="В Москве прошел учредительный съезд партии Навального"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="RT на русском"
                            secondary="Абэ выразил надежду на достижение прогресса в заключении мирного договора с РФ"
                        />
                    </ListItem>
                </List>
            </Paper>
        )
    }
}

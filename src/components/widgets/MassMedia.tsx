import * as React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

import NewsModel from '../../models/News'
import container from '../../services'
import NewsService from '../../services/News'
import TYPES from '../../services/types'

interface State {
    news: NewsModel[]
}

export default class MassMedia extends React.PureComponent<{}, State> {

    public state = {
        news: [],
    } as State

    public render() {

        return (
            <Paper style={{ opacity: 0.9 }}>
                <List subheader={
                    <ListSubheader component="div">Новости</ListSubheader>
                }>
                    {this.state.news.map((newItem) =>
                        <ListItem>
                            <ListItemText primary={newItem.title} secondary={newItem.text} />
                        </ListItem>,
                    )}
                </List>
            </Paper>
        )
    }

    public componentDidMount() {
        this.setState({
            news: container
                .get<NewsService>(TYPES.News)
                .getNews(4),
        })
    }
}

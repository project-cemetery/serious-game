import * as React from 'react'

import { css } from 'emotion'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'

const styles = {
    container: css`
        margin: 2rem 0;
    `,
}

export default class Reports extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <React.Fragment>
                <Paper className={styles.container}>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Архив отчетов" />
                        </ListItem>
                    </List>
                </Paper>
            </React.Fragment>
        )
    }

}

import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default () =>
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="title" color="inherit" style={{flex: 1}}>
                Севернее Кореи
            </Typography>
            <Button color="inherit">деньги</Button>
            <Button color="inherit">население</Button>
            <Button color="inherit">рейтинг</Button>
            <Button color="inherit">дипломатия</Button>
        </Toolbar>
    </AppBar>

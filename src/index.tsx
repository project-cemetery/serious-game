import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Hidden from '@material-ui/core/Hidden'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import 'reflect-metadata'

import Game from '@app/components/Game'
import GameNotAvailable from '@app/components/GameNotAvailable'
import reducers from '@app/reducers'
import theme from '@app/theme'

const store = createStore(
    reducers,
    applyMiddleware(thunk),
)

const Application = () =>
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>

            <Hidden mdDown>
                <Game />
            </Hidden>

            <Hidden lgUp>
                <GameNotAvailable />
            </Hidden>

        </MuiThemeProvider>
    </Provider>

ReactDOM.render(
    <Application />,
    document.getElementById('root'),
)

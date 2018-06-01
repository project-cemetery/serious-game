import { MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import 'reflect-metadata'

import Game from './components/Game'
import reducers from './reducers'
import theme from './theme'

const store = createStore(
    reducers,
    applyMiddleware(thunk),
)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Game />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
)

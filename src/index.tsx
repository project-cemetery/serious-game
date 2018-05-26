import { MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'reflect-metadata'

import App from './components/App'
import reducers from './reducers'
import theme from './theme'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
)

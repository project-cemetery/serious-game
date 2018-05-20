import * as React from 'react'

import { css } from 'emotion'
import * as Sound from 'react-sound'

import { MuiThemeProvider } from '@material-ui/core/styles'

import Event from './widgets/Event'
import FreeActions from './widgets/FreeActions'
import MassMedia from './widgets/MassMedia'
import Reports from './widgets/Reports'
import Resources from './widgets/Resources'

import theme from './theme'

const styles = {
    container: css`
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr 64px;
        grid-row-gap: 2rem;
        margin: 2rem;

        height: calc(100vh - 4rem - 64px);
    `,
}

class App extends React.Component {

    public render() {

        return (
            <MuiThemeProvider theme={theme}>
                <Resources />
                <div className={styles.container}>
                    <FreeActions />
                    <div />
                    <MassMedia />

                    <Event />
                    <div />
                    <Reports />
                </div>

                <Sound
                    url="cool_sound.mp3"
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 /* in milliseconds */}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
            </MuiThemeProvider>
        )
    }

}

export default App

import * as React from 'react'

import { css } from 'emotion'

import Event from './widgets/Event'
import FreeActions from './widgets/FreeActions'
import MassMedia from './widgets/MassMedia'
import Reports from './widgets/Reports'
import Resources from './widgets/Resources'

const styles = {
    container: css`
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr 128px;
        margin: 2rem;

        height: calc(100vh - 2rem - 64px);
    `,
}

class App extends React.Component {

    public render() {

        return (
            <React.Fragment>
                <Resources />
                <div className={styles.container}>
                    <FreeActions />
                    <div />
                    <MassMedia />

                    <Event />
                    <div />
                    <Reports />
                </div>
            </React.Fragment>
        )
    }

}

export default App

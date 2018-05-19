import * as React from 'react'

import { css } from 'emotion'

import FreeActions from './widgets/FreeActions'
import MassMedia from './widgets/MassMedia'
import Resources from './widgets/Resources'

const styles = {
    container: css`
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        margin: 2rem;
    `,
}

class App extends React.Component {

    public render() {

        return (
            <React.Fragment>
                <Resources />
                <div className={styles.container}>
                    <aside>
                        <FreeActions />
                    </aside>
                    <div />
                    <aside>
                        <MassMedia />
                    </aside>
                </div>
            </React.Fragment>
        )
    }

}

export default App

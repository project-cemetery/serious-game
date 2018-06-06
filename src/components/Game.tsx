import * as React from 'react'

import Grid from '@material-ui/core/Grid'

import ModalRoot from '@app/components/modal/ModalRoot'
import ActionsWidget from '@app/components/widget/actions/Actions'

import Container from './GameContainer'

// tslint:disable-next-line:no-empty-interface
export interface Props {
}
class Game extends React.PureComponent<Props> {

    public render() {
        return (
            <React.Fragment>
                <ModalRoot />

                <Grid container style={{ padding: '2rem', height: '100%' }}>

                    <Column>
                        <ActionsWidget />
                        <p>Button</p>
                    </Column>

                    <Grid item xs={6} />

                    <Column>
                        <p>SMI =)</p>
                        <p>Button</p>
                    </Column>

                </Grid>
            </React.Fragment>
        )
    }
}

interface ColumnProps {
    children?: JSX.Element[] | JSX.Element,
}

const Column = ({ children }: ColumnProps) =>
    <Grid item xs={3}>
        <Grid container direction="column" style={{ height: '100%' }} justify="space-between">
            {React.Children.map(children, (child) => <Grid item>{child}</Grid>)}
        </Grid>
    </Grid>

export default Container(Game)

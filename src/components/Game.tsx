import * as React from 'react'

import ModalRoot from '@app/components/modal/ModalRoot'

import Container from './GameContainer'

export interface Props {
    showBrief: () => void
}

class Game extends React.PureComponent<Props> {

    public render() {
        return (
            <React.Fragment>
                <ModalRoot />
                <p>GAME</p>
            </React.Fragment>
        )
    }

    public componentDidMount() {
        this.props.showBrief()
    }

}

export default Container(Game)

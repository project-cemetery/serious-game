import * as React from 'react'

import ModalRoot from '@app/components/modal/ModalRoot'

import Container from './GameContainer'

// tslint:disable-next-line:no-empty-interface
export interface Props {
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

}

export default Container(Game)

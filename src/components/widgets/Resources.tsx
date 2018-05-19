import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import GenericModal from './resources/GenericModal'

interface State {
    moneyIsOpen: boolean
    peopleIsOpen: boolean
    ratingIsOpen: boolean
    diplomacyIsOpen: boolean
}

export default class Resources extends React.PureComponent<{}, State> {

    public state = {
        moneyIsOpen: false,
        peopleIsOpen: false,
        ratingIsOpen: false,
        diplomacyIsOpen: false,
    } as State

    public render() {
        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={{flex: 1}}>
                        Севернее Кореи
                    </Typography>
                    <Button color="inherit" onClick={this.openMoneyModal}>💰 деньги</Button>
                    <Button color="inherit" onClick={this.openPeopleModal}>👨‍👩‍👧 население</Button>
                    <Button color="inherit" onClick={this.openRatingModal}>📈 рейтинг</Button>
                    <Button color="inherit" onClick={this.openDiplomacyModal}>🏰 дипломатия</Button>
                </Toolbar>

                <React.Fragment>
                    <GenericModal
                        title="Министр финансов"
                        open={this.state.moneyIsOpen}
                        closeModal={this.closeMoneyModal}
                    />

                    <GenericModal
                        title="Министр здравоохранения"
                        open={this.state.peopleIsOpen}
                        closeModal={this.closePeopleModal}
                    />

                    <GenericModal
                        title="Министр внутренних дел"
                        open={this.state.ratingIsOpen}
                        closeModal={this.closeRatingModal}
                    />

                    <GenericModal
                        title="Министр иностранных дел"
                        open={this.state.diplomacyIsOpen}
                        closeModal={this.closeDiplomacyModal}
                    />
                </React.Fragment>
            </AppBar>
        )
    }

    private openMoneyModal = () => this.setState({ moneyIsOpen: true })
    private closeMoneyModal = () => this.setState({ moneyIsOpen: false })

    private openPeopleModal = () => this.setState({ peopleIsOpen: true })
    private closePeopleModal = () => this.setState({ peopleIsOpen: false })

    private openRatingModal = () => this.setState({ ratingIsOpen: true })
    private closeRatingModal = () => this.setState({ ratingIsOpen: false })

    private openDiplomacyModal = () => this.setState({ diplomacyIsOpen: true })
    private closeDiplomacyModal = () => this.setState({ diplomacyIsOpen: false })

}

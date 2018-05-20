import Action from '../../models/Action'

export default interface ActionsInterface {

    setCallback(callback: () => void): void

    getActions(): Action[]

}

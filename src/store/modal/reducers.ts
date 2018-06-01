import { Action, handleActions } from 'redux-actions'

import { actionTypes, ModalEnum } from './actions'

export const handleShow = (state: ModalState, action: Action<{modal: ModalEnum, id: string}>) => ({
    ...state,
    show: true,
    type: action.payload!.modal,
    id: action.payload!.id,
})

export const handleHide = (state: ModalState, action: Action<{}>) => ({
    ...state,
    show: false,
    type: undefined,
    id: undefined,
})

export interface ModalState {
    show: boolean
    type?: ModalEnum
    id?: string
    payload?: any
}

export default handleActions(
    {
        [actionTypes.SHOW]: handleShow,
        [actionTypes.HIDE]: handleHide,
    },
    {
        show: false,
    } as ModalState,
)

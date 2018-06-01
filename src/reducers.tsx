import { combineReducers } from 'redux'

import briefReducers, { BriefState } from '@app/store/brief/reducers'
import modalReducers, { ModalState } from '@app/store/modal/reducers'

export interface AppState {
    brief: BriefState
    modal: ModalState
}

export default combineReducers({
    brief: briefReducers,
    modal: modalReducers,
})

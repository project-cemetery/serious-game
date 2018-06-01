import { combineReducers } from 'redux'

import briefReducers, { BriefState } from './store/brief/reducers'
import modalReducers, { ModalState } from './store/modal/reducers'

export interface AppState {
    brief: BriefState
    modal: ModalState
}

export default combineReducers({
    brief: briefReducers,
    modal: modalReducers,
})

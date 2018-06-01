import { Action, handleActions } from 'redux-actions'

import { actionTypes } from './actions'

export const handleChange = (state: BriefState, action: Action<string>) => ({
    ...state,
    content: action.payload,
})

export interface BriefState {
    content: string
}

export default handleActions(
    {
        [actionTypes.CHANGE]: handleChange,
    },
    {
        content: '',
    },
)

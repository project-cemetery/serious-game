import { Dispatch } from 'redux'
import { Action } from 'redux-actions'

import { AppState } from '../../reducers'
import service from '../../services_'
import TYPES from '../../services_/types'
import WorldStateDeterminator from '../../services_/WorldStateDeterminator'

const actionType = (name: string) => `brief/${name}`

export const actionTypes = {
    CHANGE: actionType('CHANGE'),
    DETERMINE: actionType('DETERMINE'),
}

export interface BriefActions {
    change?: (content: string) => Action<string>

    // Impure actionCreators!
    determine?: () => string
}

const change = (content: string) => ({
    type: actionTypes.CHANGE,
    payload: content,
} as Action<string>)

const determine = () => (dispatch: Dispatch, getState: () => AppState) => {
    const content = service.get<WorldStateDeterminator>(TYPES.WorldStateDeterminator).getBrief()

    if (getState().brief.content !== content) {
        dispatch(change(content))
    }

    return content
}

export default {
    change,
    determine,
}

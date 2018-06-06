import { Dispatch } from 'redux'
import { Action } from 'redux-actions'

import { AppState } from '@app/reducers'
import service from '@app/services'
import TYPES from '@app/services/types'
import WorldStateDeterminator from '@app/services/WorldStateDeterminator'

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

import { STATUS_ACTIVE, STATUS_INACTIVE, SHOW_ACTIVE, SHOW_INACTIVE } from '../actions/actions'

export function visibilityReducer(visibility = STATUS_ACTIVE, action) {
    switch(action.type) {
        case SHOW_ACTIVE: 
            return STATUS_ACTIVE
        case SHOW_INACTIVE:
            return STATUS_INACTIVE
        default:
            return visibility
    }
}


import {LOAD_MESSAGE, SEND_MESSAGE, SET_MESSAGES} from '../actions/types'

const messageReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD_MESSAGE:
            return {...state, selectedMessage: action.payload}
        case SEND_MESSAGE:
            return {...state, selectedMessage: {...state.selectedMessage, messages: [...state.selectedMessage.messages, action.payload]}}
        case SET_MESSAGES:
            return {...state, selectedMessage: {...state.selectedMessage, messages: action.payload}}
        default:
            return state
    }
}

export default messageReducer

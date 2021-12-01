import whatsApi from '../api/whatsApi'
import {LOAD_MESSAGE, SEND_MESSAGE, SET_MESSAGES} from './types'
import { NOT_SENT, SENT } from '../util/MessageStatus'
import { uuid } from 'uuidv4';


export const loadMessage = (messageId) => {
    return async (dispatch) => {
        const response = await whatsApi.get(`messages/${messageId}`)
        dispatch({
            type: LOAD_MESSAGE,
            payload: response.data
        })
    }
}

export const sendMessage = (text) => {
    return async(dispatch, getState) => {
        // Create text object
        const newMessage = {
            id: uuid(),
            fromOwner: true,
            status: SENT,
            text: text,
            timestamp: new Date().toLocaleDateString(),
        }

        // Append text to the conversation
        dispatch({
            type: SEND_MESSAGE,
            payload: {...newMessage, status: NOT_SENT}
        })

        // Forced delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Send the text to the server
        const messageId = getState().selectedMessage.selectedMessage.id
        const currentMessages = await whatsApi.get(`messages/${messageId}`)
        const messages = [...currentMessages.data.messages, newMessage]
        const response = await whatsApi.patch(`messages/${messageId}`, {messages})
        dispatch({
            type: SET_MESSAGES,
            payload: response.data.messages
        })
    }

}
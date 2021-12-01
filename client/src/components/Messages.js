import React, { useEffect, useState } from 'react'
import MessageCard from './MessageCard'
import whatsApi from '../api/whatsApi'

import './Messages.css'

function Messages() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const setLastMessages = async () => {
            const response = await whatsApi.get('/lastMessages')
            setMessages(response?.data)
        }
        setLastMessages()
    }, [])

    const renderMessages = () => {
        return messages.map((message) => {
            return <MessageCard key={message.id} {...message} />
        })
    }

    return (
        <div className="messages">
            {renderMessages()}
        </div>
    )
}

export default Messages

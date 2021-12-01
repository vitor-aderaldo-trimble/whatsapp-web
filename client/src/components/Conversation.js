import { Avatar } from '@material-ui/core'
import { MoreVert, Search, InsertEmoticon, AttachFile, Mic } from '@material-ui/icons'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import OwnerMessage from './OwnerMessage'
import FriendMessage from './FriendMessage'
import Option from './Option'
import { sendMessage } from '../actions'

import './Conversation.css'

function Conversation(props) {

    const [text, setText] = useState('')

    const friendName = props.selectedMessage? props.selectedMessage.friendName : null

    const renderConversation = () => {
        if (props.selectedMessage?.messages) {
            return props.selectedMessage.messages.slice().reverse().map((message, index) => {
                return message.fromOwner ?
                    <div className="messageWrap" key={message.id}>
                        <OwnerMessage messageId={props.selectedMessage.id} {...message}  />
                    </div> :
                    <div className="messageWrap" key={message.id}>
                        <FriendMessage messageId={props.selectedMessage.id} {...message} />
                    </div>
            })
        }
        return null
    }

    const sendText = (event) => {
        event.preventDefault()
        props.sendMessage(text)
        setText('')
    }

    const FriendAvatar = () => <Avatar src={props.selectedMessage.friendPicture} />

    return (
        <div className="conversation">
            <div className="conversation_header">
                <div className="conversation_header_left">
                    <Option Element={FriendAvatar} />
                    <span>{friendName}</span>
                </div>
                <div className="conversation_header_right">
                    <Option Element={Search} />
                    <Option Element={MoreVert} />
                </div>
            </div>
            <div className="conversation_body">
                {renderConversation()}
            </div>
            <div className="conversation_footer">
                <Option Element={InsertEmoticon} />
                <Option Element={AttachFile} />
                <form onSubmit={sendText}>
                    <input
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </form>
                <Option Element={Mic} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedMessage: state?.selectedMessage?.selectedMessage
    }
}

export default connect(mapStateToProps, {sendMessage})(Conversation)

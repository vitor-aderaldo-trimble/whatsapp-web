import { Avatar } from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'
import React from 'react'
import { connect } from 'react-redux'
import {loadMessage} from '../actions'
import Check from './checks/Check'

import './MessageCard.css'

function MessageCard(props) {

    const {id, profilePicture, name, lastMessage, unreadMessageCount} = props

    const UnreadMessages = () => {
        if (!lastMessage.fromOwner) {
            return (
                <div className="unreadCount">
                    <span >{unreadMessageCount}</span>
                </div>
            )
        }
        return null
    }

    const loadMessage = () => {
        props.loadMessage(id)
    }

    return (
        <div className={`messageCard ${props.selectedMessage?.id === id ? 'selected' : ''}`} onClick={loadMessage}>
            <Avatar style={{width: 50, height: 50}} src={profilePicture}/>
            <div className="messageDetails">
                <div className="messageView">
                    <h4>{name}</h4>
                    <div className="messageText">
                        {lastMessage.fromOwner ? <Check status={lastMessage.status} /> : null}
                        <span>{lastMessage.text}</span>
                        <UnreadMessages />
                        <ExpandMore className="expand" />
                    </div>
                </div>

                <span className="date">{lastMessage.timestamp}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedMessage: state.selectedMessage.selectedMessage
    }
}

export default connect(mapStateToProps, {loadMessage})(MessageCard)

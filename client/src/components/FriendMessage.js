import React from 'react'
import './FriendMessage.css'

function FriendMessage(props) {

    const {text, timestamp} = props

    return (
        <div className="friendMessage">
             <div className="friendText">
                <span>{text}</span>
            </div>
            <div className="friendDetails">
                <span>{timestamp}</span>
            </div>
        </div>
    )

}

export default FriendMessage

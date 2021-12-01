import React from 'react'
import Check from './checks/Check'
import {KeyboardArrowDown} from '@material-ui/icons'
import './OwnerMessage.css'

function OwnerMessage(props) {
    const {text, status, timestamp} = props
    return (
        <div className="ownerMessage">
            <div className="ownerText">
                <span>{text}</span>
                <div className="messageOption">
                    <KeyboardArrowDown />
                </div>
            </div>

            <div className="ownerDetails">
                <span>{timestamp}</span>
                <Check status={status} />
            </div>
        </div>
    )
}

export default OwnerMessage

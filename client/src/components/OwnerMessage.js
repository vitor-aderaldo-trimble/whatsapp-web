import React, { useState } from 'react'
import Check from './checks/Check'
import {KeyboardArrowDown} from '@material-ui/icons'
import TextAction from './TextAction'

import './OwnerMessage.css'

function OwnerMessage(props) {

    const [openTextAction, setOpenTextAction] = useState(false)
    const {id, text, status, timestamp, messageId} = props
    const className = openTextAction ? "active" : null
    return (
        <div className={`ownerMessage ${className}`} tabIndex={0} onBlur={e => setOpenTextAction(false)}>
            <TextAction messageId={messageId} textId={id} />
            <div className="ownerText">
                <span>{text}</span>
                <div className="messageOption" onClick={e => setOpenTextAction(!openTextAction)} onBlur={e => setOpenTextAction(false)} >
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

import React from 'react'
import { connect } from 'react-redux'
import {deleteText} from '../actions'

import './TextAction.css'

function TextAction(props) {

    const deleteMessage = () => {
        props.deleteText(props.messageId, props.textId)
    }

    return (
        <div className="textActions">
            <span>Dados da mensagem</span>
            <span>Responder</span>
            <span>Encaminhar mensagem</span>
            <span>Favoritar mensagem</span>
            <span onClick={deleteMessage}>Apagar mensagem</span>
        </div>
    )
}

export default connect(null, {deleteText})(TextAction)

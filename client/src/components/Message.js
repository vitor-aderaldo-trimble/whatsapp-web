import React from 'react'
import { connect } from 'react-redux'
import Conversation from './Conversation'

import './Message.css'

function Message(props) {

    const user = null

    const DefaultMessage = () => {
        return (
            <div className="defaultMessage">
                <img src="/assets/alert.jpg" alt="" />
                <h1>Mantenha seu celular conectado</h1>
                <h3>O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi</h3>
            </div>
        )
    }

    const renderMessage = () => {
        return props.selectedMessage ? <Conversation /> : <DefaultMessage />
    }


    return (
        <div className="message">
            {renderMessage()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedMessage: state.selectedMessage.selectedMessage
    }
}

export default connect(mapStateToProps, {})(Message)

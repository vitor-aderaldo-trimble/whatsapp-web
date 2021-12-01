import React from 'react'
import NotSent from './NotSent'
import Sent from './Sent'
import Received from './Received'
import Seen from './Seen'
import {NOT_SENT, SENT, RECEIVED, SEEN} from '../../util/MessageStatus'

import './Check.css'

function Check({status}) {
    const checkMap = {}
    checkMap[NOT_SENT] = <NotSent />
    checkMap[SENT] = <Sent />
    checkMap[RECEIVED] =  <Received />
    checkMap[SEEN] = <Seen />
    return checkMap[status]
}

export default Check

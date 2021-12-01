import React from 'react'
import {Check} from '@material-ui/icons'

function Seen() {
    return (
        <div className="messageCheck">
            <Check className="seen" />
            <Check className="seen" />
        </div>
    )
}

export default Seen

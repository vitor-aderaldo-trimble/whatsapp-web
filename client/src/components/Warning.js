import React from 'react'
import {ChevronRight} from '@material-ui/icons'

import './Warning.css'

function Warning({Icon, title, description, color}) {
    return (
        <div className="warning" style={{backgroundColor: color}}>
            <div style={{color}} className="warning_left">
                <Icon />
            </div>
            <div className="warning_right">
                <h4>{title}</h4>
                <div className="warning__description">
                    <span>{description}</span>
                    <ChevronRight />
                </div>

            </div>

        </div>
    )
}

export default Warning

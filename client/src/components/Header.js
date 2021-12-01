import React from 'react'
import { Avatar } from '@material-ui/core'
import {Chat, MoreVert, DonutLargeOutlined} from '@material-ui/icons'
import Option from './Option'

import './Header.css'

function Header() {

    const UserAvatar = () => <Avatar src="" />

    return (
        <div className="header">
            <div className="header_left">
                <div className="header_userInfo">
                <Option Element={UserAvatar} />
                </div>
            </div>
            <div className="header_right">
                    <Option Element={DonutLargeOutlined} />
                    <Option Element={Chat} />
                    <Option Element={MoreVert} />
            </div>
        </div>
    )
}

export default Header

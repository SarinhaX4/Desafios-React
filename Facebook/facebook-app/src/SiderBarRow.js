import React from 'react'
import './SidebarRow.css'
import { Avatar, Link } from '@material-ui/core'


const SiderBarRow = ({src, Icon, title}) => { //props
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src} />}
        {Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default SiderBarRow
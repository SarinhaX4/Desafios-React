import React from 'react'
import './Sidebar.css'

import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons'

import SiderBarRow from './SiderBarRow'

const SiderBar = () => {
  return (
    <div className='sidebar'>
        <SiderBarRow src='data:image/jpeg;base64,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' title= 'Nazaré Tadesco' />
        <SiderBarRow Icon={LocalHospital} title='COVID-19 Informações'/>
        <SiderBarRow Icon={EmojiFlags} title='Página'/>
        <SiderBarRow Icon={People} title='Amigos'/>
        <SiderBarRow Icon={Chat} title='Chat'/>
        <SiderBarRow Icon={Storefront} title='Marketplace'/>
        <SiderBarRow Icon={VideoLibrary} title='Vídeos'/>
        <SiderBarRow Icon={ExpandMoreOutlined} title='Mais'/>
    </div>
  )
}

export default SiderBar
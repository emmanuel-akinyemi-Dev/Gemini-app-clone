import React, { useState } from 'react'
import "./sidebar.css"
import { assets } from '../../assets/assets'

function Sidebar() {

    const [extended, setextended] = useState(false)
  return (
    <div className='sidebar'>
         <div className='top'>
            <div className='menu'>
                <img onClick={()=>setextended(prev=>!prev)} src={assets.menu_icon} alt="menu_icon" />
            </div>
            <div className='new_chat'>
                <img src={assets.plus_icon} alt="pluss_icon" />
                {extended?<p>New Chat</p>:null}
            </div>
            <div className='recent'>
                {extended?<p className='recent_title'>Recent</p>:null}
            </div>
            <div className="recent_entry">
                {extended?<img src={assets.message_icon} alt="message_icon" />:null}
                {extended?<p>what is react...</p>:null}
            </div>
         </div>
         <div className='bottom'>
    <div className="bottom_item recent_entry">
        <img src={assets.question_icon} alt="question_icon" />
        {extended?<p>Help</p>:null}
    </div>
    <div className="bottom_item recent_entry">
        <img src={assets.history_icon} alt="history_icon" />
        {extended?<p>Activities</p>:null}
    </div>
    <div className="bottom_item recent_entry">
        <img src={assets.settings_icon} alt="setting_icon" />
        {extended?<p>Settings</p>:null}
    </div>
         </div>
    </div>
  )
}
export default Sidebar

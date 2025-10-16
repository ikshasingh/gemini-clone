import React from 'react'
import './sidebar.css'
import {useState} from 'react'
import { assets } from '../../assets/assets'
export default function Sidebar(){

    const[extended , setExtended] = useState(false);

    const toExtend =()=>{
        setExtended(!extended);
    }
    return(
        //sidebar// if
        <div className ="sidebar">

            {/* menu , newchat */}
            <div clasName ="top"> 
                <img  onClick ={toExtend}className ="menu" src={assets.menu_icon}></img>
                <div className ="newchat">
                    <img  className ="plusicon" src={assets.plus_icon} alt="" />
                   {extended? <p>New Chat</p>: null} 
                </div>
           


            {/* /* recents */}
            <div className ="recents">
              {extended?    <p className='recent-title'>Recent</p> : null}
                <div className='recent-entry'>
                 {extended?   <img src={assets.message_icon} alt="" />: null}
           {extended?<p> What is react...</p>:null} 
                </div>

            </div>
             </div>


            <div className ="bottom">
                <div className='bottom-item  recent-entry'>
                    <img src={assets.question_icon} alt="" />
                   {extended? <p>Help</p>: null}
                </div>
                <div className ='bottom-item recent-entry'> 
                  <img   src={assets.history_icon}></img>
                   {extended?   <p>Activity</p>: null}
                </div>
                <div className='bottom-item  recent-entry'>
                    <img src={assets.setting_icon} alt="" />
                    {extended?  <p>Settings</p>: null}
                </div>
            </div>
        </div>
    )
}

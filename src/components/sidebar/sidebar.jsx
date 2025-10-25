import React, { useState, useContext } from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';


export default function Sidebar(){
    const[extended , setExtended] = useState(false);
    const {onSent , previousPrompt , setRecentPrompt , newChat} = useContext(Context);

    const loadprompt = async (prompt) =>{
        setRecentPrompt(prompt);
       await  onSent(prompt);
    }
    const toExtend =()=>{
        setExtended(!extended);
    }
    return(
        //sidebar// if
        <div className ="sidebar">

            {/* menu , newchat */}
            <div className ="top"> 
                <img  onClick ={toExtend}className ="menu" src={assets.menu_icon}></img>
                <div  onClick ={()=>newChat()} className ="newchat">
                    <img  className ="plusicon" src={assets.plus_icon} alt="" />
                   {extended? <p>New Chat</p>: null} 
                </div>
           


            {/* /* recents */}
             {extended?
            <div className ="recents">
           <p className='recent-title'>Recent</p>
           {previousPrompt.map((item , index)=>{
        return (
      <div onClick={()=>loadprompt(item) } className='recent-entry'>
                  <img src={assets.message_icon} alt="" />
                  {/* 0 -18 will do not display full prompt */}
          <p>{item.slice(0,18)} ...</p>
                </div>
            )
           })}              
           
            </div>
            :null }



            
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




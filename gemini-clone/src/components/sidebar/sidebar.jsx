import React from 'react'
import { assets } from '../../assets/assets'
export default function Sidebar(){
    return(
        <div className ="sidebar">
            <div clasName ="top"> 
                <img src={assets.menu_icon}></img>
            </div>
            <div className ="bottom">
                <img src={assets.history_icon}></img>
            </div>
        </div>
    )
}

import "../componet-style/nav-bar.css"
import { MdOutlineMenuOpen } from "react-icons/md";
import { useEffect, useState } from "react";
import '../scripts/nav-bar'
import { nav_animation } from "../scripts/nav-bar";
import { gettingRoute } from '../scripts/route-script'
import { sendCookie } from "../scripts/account-create";
function Navigation(){
    nav_animation()
    sendCookie()
    const [openMenu , setOpen] = useState(true)
    const openHiddenMenu = ()=>{
         if(openMenu == true){
        setOpen(false)
            document.querySelector(".hidden-side-menu").style.width="100%"
         }else{
        setOpen(true)
            document.querySelector(".hidden-side-menu").style.width="0%"
         }
    }
    return(<>
    
    <div className="navigation-bar">
        
        <div className="logo">
            <h1>Jo <span id="red-color">Films</span></h1>
        </div>

        <div className="ancers">
            <a href="/">Home</a>
            <a onClick={()=>{gettingRoute("tv-show")}}>Tv</a>
            <a onClick={()=>{gettingRoute("movie")}}>Movie</a>
            <a onClick={()=>{gettingRoute("upcoming")}}>Search</a>
        </div>

        <div className="buttons">
            <button onClick={()=>{window.location="/sign-in"}}>Sign In</button>
            <button onClick={()=>{window.location="/sign-up"}}>Sign Up</button>
        </div>

        <div id="hidden-menu-display" onClick={openHiddenMenu} className="hidden-menu-icon">
        <MdOutlineMenuOpen size={40}/>
        </div>

    </div>

    <div className="hidden-side-menu">
        
            <div className="component">

            <div className="ancers">
            <a >Home</a><br/><br/>
            <a onClick={()=>{gettingRoute("tv-show")}} >Tv</a><br/><br/>
            <a onClick={()=>{gettingRoute("movie")}} >Movie</a><br/><br/>
            <a onClick={()=>{gettingRoute("upcoming")}} >Search</a><br/><br/>
            </div>


            <div className="buttons">
            <button onClick={()=>{window.location="/sign-in"}}>Sign In</button><br/>
            <button onClick={()=>{window.location="/sign-up"}}>Sign Up</button><br/>
            </div>
            </div>



    </div>
    
    </>)
}

export default Navigation
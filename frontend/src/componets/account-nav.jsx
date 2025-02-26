import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useState } from 'react';
import { MdFavorite } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import '../componet-style/search-area.css'
import { RouteToTv } from '../scripts/route-script.js'
import { gettingSearch } from "../scripts/nav-bar.js";
import { ToastContainer } from "react-toastify";
import { logout ,sendCookie , deleteYourAccount} from "../scripts/account-create.js";
function AccountNav(){
    sendCookie()
    const [ open , setOpen ] = useState(true)
    const ChangeState = ()=>{
        if(open == true){
            setOpen(false)
            document.querySelector(".profile-information").style.height="140px"
        }else{
            setOpen(true)
            document.querySelector(".profile-information").style.height="0px"
        }
    }

    const [respo , setRespo] = useState(true)

const OpenResponcive = ()=>{
    if(respo == true){
        setRespo(false)
        document.querySelector(".side-menu-hidden").style.width="100%"
    }else{
        setRespo(true)
        document.querySelector(".side-menu-hidden").style.width="0%"
    }
}


return(<>
    
<ToastContainer/>

      <div className="side-menu-hidden">
                    
                    <div className="center-items">
    
                        <h2> - Profile Setting</h2>
    
                        <div className="each-center-item"><span id="email-display1"></span></div>
                        <div onClick={()=>RouteToTv("fav")} className="each-center-item"><span>Favorites <MdFavorite/></span></div>
                        <div onClick={()=>RouteToTv("live-show")} className="each-center-item"><span>LiveShow <CiVideoOn/></span></div>
                        <div onClick={()=>RouteToTv("upcoming")} className="each-center-item"><span>UpComing <GrUpdate/></span></div>
                        <div className="each-center-item"><span>Logout <CiLogout/></span></div>
                        <div className="each-center-item"><span>Delete Account <MdDeleteOutline/> </span></div>
                        
                    </div>
                </div>
    
                {/*  Hidden Menu Part */}
    
                    <div className="search-nav-bar">
    
                        <div className="search-side">
    
                            <div className="search-box">
                             <div className="search-icon"><CiSearch/></div>   <input type="text" id="search-part" placeholder='Search ...'/><button onClick={gettingSearch}>Search</button>
                            </div>
    
                        </div>
    
    
                        <div className="clint-buttons">
                            <div className="recomend"><a onClick={()=>RouteToTv("movie")}>Home</a></div>
                            <div className="recomend"><a onClick={()=>RouteToTv("movie")}>Movie</a></div>
                            <div className="recomend"><a onClick={()=>RouteToTv("tv-show")}>TvShow</a></div>
                            <div className="recomend"><a onClick={()=>RouteToTv("live-show")}>LiveShow</a></div>
                            <div className="recomend"><a onClick={()=>RouteToTv("upcoming")}>Upcoming</a></div>
                        </div>
    
                        <div className="profile-button">
                            <div className="profile-class" onClick={ChangeState}><CgProfile size="25"/></div>
                        </div>
    
                        <div className="hidden-profile-button">
                            <div className="profile-class" onClick={OpenResponcive}><CgProfile size="25"/></div>
                        </div>
                    </div>
    
    
    
    {/*Responce Section */}
    
    
                <div className="profile-information">
    
                    <div className="button-section">
                    <div className="back-button">
                    <span id="email-display2"></span>
                </div>
                <div className="back-button">
                    <span onClick={logout}>Logout <CiLogout size="20"/></span>
                </div>
                <div className="back-button">
                    <span onClick={deleteYourAccount}>Delete Account <MdDeleteOutline size="20"/> </span>
                </div>
                    </div>
    
    
                </div>
    
    
    </>)
}

export default AccountNav
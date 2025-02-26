import "../componet-style/bottom-bar-style.css"
import { IoMdHome } from "react-icons/io";
import { MdMovieCreation } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { gettingRoute } from '../scripts/route-script.js'
function BottomBar (){

    return(<>
    
        
        <div className="bottom-nav">
            
            <div className="flex-icons">

            <div className="icons">
                <div onClick={()=>{window.location="/"}} className="home"><IoMdHome size="25"/>Home</div>
                 </div>


            <div className="icons">
                <div onClick={()=>{gettingRoute("movie")}} className="movie"><MdMovieCreation  size="25"/>Movie</div>
                </div>


            <div className="icons">
                <div onClick={()=>{gettingRoute("tv-show")}} className="tv-show"><IoTv  size="25"/><br/>Tv</div>
                </div>



            <div className="icons">
                <div onClick={()=>{gettingRoute("upcoming")}} className="search"><FaSearch  size="25"/>Search</div>
                </div>


            </div>

        </div>
        
    </>)
}

export default BottomBar
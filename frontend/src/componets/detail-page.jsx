import '../componet-style/detail-page.css'
import { deatailPageCheaker } from '../scripts/route-script';
import { ToastContainer } from 'react-toastify';
function DetailPage(){
    deatailPageCheaker()
    return(<>

        <div  className="detail-page">


        <div id='movieFrane' className="movieFrame">

            

            </div>

            <div className="flex-poster">
<div id='film-poster' className="film-poster"></div>
<div className="actors-information">
     <div className="actors-profile-picture">
         <div id='profile-heder' className="profile-heder"><h2>Actors</h2></div><br/></div>
        </div>
</div>

 <div className="recomendation">
 <div className="heder"><h2>Recomended</h2></div>
<div id='flex-recomended' className="flex-recomended"></div></div>
        </div>

    
<ToastContainer/>
    </>)
}

export default DetailPage
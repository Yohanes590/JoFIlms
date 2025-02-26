import '../componet-style/404.css'
import { MdWifiTetheringError } from "react-icons/md";
import { TbError404 } from "react-icons/tb";
function ErrorPage (){

    const gobackHome = ()=>{
        window.location.href="/"
    }
    return(<>

       <div className="error-page">

                <div className="center-element">
                   <span id='red-color'><MdWifiTetheringError size="140"/></span>
                    <h1>Page Not Found</h1>
                    <h3>Please Fix Url Or Location</h3>
                    <h2><TbError404 size="40"/></h2>
                    <button onClick={gobackHome}>Home</button>
                </div>

       </div>
    
    </>)
}

export default ErrorPage
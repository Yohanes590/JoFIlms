import '../componet-style/Fotter.css'
import { FcDisclaimer } from "react-icons/fc";
import { RiSpeedUpFill } from "react-icons/ri";
import { MdLiveTv } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
function Fotter(){
    return(
        <>
        
            <div className="fotter">

                    <div className="flex-fotter">
                        
                    <div className="card-item">
                        <h2>Disclaimer : <FcDisclaimer/></h2>
                        <p>Jo Films does not host or stream any copyrighted content. 
                            All movie data, images, and trailers are sourced from 
                            third-party providers. We are not responsible for external
                             links or content. If you have copyright concerns, 
                             please contact the respective owners.</p>
                    </div>


                    <div className="card-elemnts">

                        <div className="minimal-card">
                            <h2>Fast <RiSpeedUpFill/></h2>
                        </div>

                        <div className="minimal-card">
                        <h2>Free <MdLiveTv/></h2>
                        </div>

                        <div className="minimal-card">
                        <h2>HD <FaCrown/></h2>
                        </div>



                    </div>

                    </div>
            </div><br/><br/>

           
                    <div className="copyright-section">
                     <center>
                   <div className="line"></div>
                    <div className="year">
                        &copy;2025 Jo Films. All rights reserved.
                    </div>
                    </center>
                    </div>
                    
        
        </>
    )
}

export default Fotter
import '../componet-style/sign-up.css'
import { CreateAccount } from '../scripts/account-create'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
function SignUp(){
    return(<>

        <div className="sign-up-box">

                
                <div className="box">
                
                <div className="header-part">
                    <h1>Sign Up <span id='yellow-color'>Here</span></h1>
                    <p>Create <span id="yellow-color">Account For</span>  More Access</p>
                </div>

                <div className="input-sec">
                <input type="text" id="name"  placeholder='Your Name'/>

                    <input type="email" id='email' placeholder='Email' /><br/>

                    <input type="password" id='password1' placeholder='password'/><br/>
                    <input type="password" id='password2' placeholder='confirm'/><br/>
                    <button onClick={CreateAccount}>Sign Up</button><br/><br/>

                    <p>I Have Already Account I Need <a href="/sign-in">Sign In</a></p>
                </div>
                

                </div>

        </div>
    
    <ToastContainer/>
    </>)
}

export default SignUp
import { ConstantLink } from '../scripts/apiKey'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
export async function CreateAccount (){

    const username =document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const empty = ""

if(username == empty){
    toast.warning("User Name Require",{position:"top-center"})
}else if(email == empty){
    toast.warning("Email Require",{position:"top-center"})
}else if(password1 == empty){
    toast.warning("Password Require",{position:"top-center"})
}else if(password1.length < 8){
    toast.warning("Below 8 Character Not Allowed",{position:"top-center"})
}else if(password2 == empty){
    toast.warning("Confirm Password",{position:"top-center"})
}else if(password1 != password2) {
    toast.warning("Not Same Password",{position:"top-center"})
}else{
    const sendRequest = await fetch(ConstantLink+"/account-create",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:username,
            email:email,
            password:password1
        })
    })
    const changeToJson = await sendRequest.json()
    const access_token = changeToJson.access_token
    if(changeToJson.status == 200){
        Cookies.set("access_token",access_token,{expires:1/24})
        toast.success("Account Created Success",{position:"top-center"})
        window.location.href="sign-in"
    }else if(changeToJson.status == 500){
        toast.warning("Already Existing Account",{position:"top-center"})
        window.location.href="sign-in"
    }else{
        toast.error("Some Thing Went Wrong",{position:"top-center"})
    }
}

}


export const LoginUser =  async()=>{

    const email = document.getElementById("email").value;
    const password = document.getElementById("passowrd").value;
    const loginInfo = {
        email:email,
        password:password
    }

 if (email == ""){
    toast.warning("Please Fill Email", {position:"top-center"})
 }else if(password == ""){
    toast.warning("Please Fill Password", {position:"top-center"})
 }else{
    const loginToServer = await fetch(ConstantLink+"/login-certificate",{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(loginInfo)
    })
    const responceTOJson = await loginToServer.json()
    if(responceTOJson.status == 200){
        Cookies.set("access_token",responceTOJson.access_token)
        toast.success("Login Success!", {position:"top-center"})
        window.location.href="/user-option/movie"
    }else if(responceTOJson.status == 400){
        toast.warning("Account Not Found!", {position:"top-center"})
    }else{
        toast.error("Some Thing Went Wrong!", {position:"top-center"})
    }
 }
}


export  const sendCookie = async ()=>{
    const getToken = Cookies.get("access_token")
    const sendCookieToserver = await fetch(ConstantLink+"/check-account",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({token:getToken})
    })
    const changeIntojson = await sendCookieToserver.json()
    if(changeIntojson.status==200){
        if (window.location.pathname=="/"){
            window.location.href="/user-option/movie"
        }else{
            document.getElementById("email-display1").innerText=changeIntojson.email
            document.getElementById("email-display2").innerText=changeIntojson.email
            window.localStorage.setItem("email",changeIntojson.email)
        }
    }else{
        if(window.location.pathname=="/user-option/movie"){
            window.location.href="/"
            toast.warning("Please Login To Account!!",{position:"top-center"})
        }else if(window.location.pathname=="/user-option/tv-show"){
            window.location.href="/"
            toast.warning("Please Login To Account!!",{position:"top-center"})            
        }else if(window.location.pathname=="/user-option/live-show"){
            window.location.href="/"
            toast.warning("Please Login To Account!!",{position:"top-center"})            
        }else if(window.location.pathname=="/user-option/upcoming"){
            window.location.href="/"
            toast.warning("Please Login To Account!!",{position:"top-center"})
        }
    }
}   




export const logout = ()=>{
    if(confirm("Are You Sure To Logout")){
        Cookies.remove("access_token")
        window.location.href="/"
    }else{
        toast.warning("Process Cancel" ,{position:"top-center"})
    }
}


export const deleteYourAccount = async()=>{
    const getEmail = localStorage.getItem("email")
    if(confirm("Are You Sure To Delete")){
        const deleteIntoServer = await fetch(ConstantLink+"/delete-account",
            {
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email:getEmail})
            }
                )
                const jsonOutput = await deleteIntoServer.json()
                if(jsonOutput.status == 200){
                    toast.warning("Account Delete Success")
                    Cookies.remove("access_token")
                    window.location.reload()
                }else{
                    toast.error("Some Thing Is Wrong")
                    Cookies.remove("access_token")
                    window.location.reload()
                }
    }else{
        toast("Process Cancel Success!")
    }
}
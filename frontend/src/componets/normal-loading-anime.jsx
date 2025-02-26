import '../componet-style/norm-loading.css'

function LoadingNormal(){
    setTimeout(() => {
    document.querySelector('.loading-animation').style.display="none"
    }, 5000);
    return(<>
    
        <div className="loading-animation">
        <div className="loader"></div> 

        </div>
    
    </>)
}

export default LoadingNormal 
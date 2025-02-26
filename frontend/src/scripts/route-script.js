import { toast } from 'react-toastify'
import { APIKEY } from '../scripts/apiKey'
import profile from '../assets/user-icon.png'
export const RouteToTv = (userOption)=>{
    const display = document.getElementById("user-display")
    document.querySelector(".side-menu-hidden").style.width="0%"
    if(userOption=="movie"){
        window.location.href ="/user-option/movie"
    }else if(userOption == "tv-show"){
        window.location.href ="/user-option/tv-show"
    }else if(userOption == "fav"){
        window.location.href ="/user-option/favorite"
    }else if(userOption == "live-show"){
       window.location.href ="/user-option/live-show"
    }else if(userOption == "upcoming"){
        window.location.href ="/user-option/upcoming"
    }
}

export function gettingRoute (Route){
    console.log(Route)
   window.location=`/user-option/${Route}`
}



export const showDetails = (eachArrayValue)=>{
    localStorage.setItem("xvsLocal" , JSON.stringify(eachArrayValue))
    window.location.href="/detail"
}


export const deatailPageCheaker =()=>{
 const localVar=  localStorage.getItem("xvsLocal")
    if (localVar == null){
        toast.error("Reading Local Null" ,{position:'top-center'})
        setTimeout(()=>{
            document.querySelector(".detail-page").style.display="none"
        },1000)
        setTimeout(() => {
            window.location.href="/"
        }, 3000);
        console.log(localVar)
    }else{
        const parsingArray = JSON.parse(localVar)
        console.log()
       setTimeout(async() => {
        const posterPhoto = document.createElement("div")

        const actors = await fetch(`https://api.themoviedb.org/3/movie/${parsingArray.id}/credits?api_key=${APIKEY}`)
        const actorsInJson = await actors.json()
        actorsInJson.cast.forEach(indexValue =>{

            const someDiv = document.createElement("div")
            const imagePath = indexValue.profile_path 
            ? `https://image.tmdb.org/t/p/w500${indexValue.profile_path}` 
            : profile
            someDiv.innerHTML=`
            <div class="profile-button">
            <div class="profile"><img src="${imagePath}"  alt="Profile"/></div> 
            <div class="actor-info">
                <h3>${indexValue.original_name}</h3>
                <p>${indexValue.character}</p></div>
                </div>
            `

            document.getElementById("profile-heder").append(someDiv)
        })
        posterPhoto.className="poster-photo"
        posterPhoto.innerHTML=`<img src="https://image.tmdb.org/t/p/w500${parsingArray.poster_path}"  /> `
        const poster_title = document.createElement("div")
        poster_title.className="poster-title"
        console.log(parsingArray.overview)
        poster_title.innerHTML=`
        <h1>${parsingArray.original_title}</h1> 
                                <p>Relase Date :${parsingArray.release_date}</p>
                                <div class="period">
                                    <h3><i class="fa-solid fa-clock"></i></h3>
                                    <h3><i class="fa-solid fa-calendar"></i></h3>
                                    <h3>${parsingArray.original_language.toUpperCase()}</h3>
                                </div>
                                <p>${parsingArray.overview.slice(0,70)}<br/>
                                   ${parsingArray.overview.slice(70,140)}<br/>
                                   ${parsingArray.overview.slice(140,210)}<br/>
                                   ${parsingArray.overview.slice(210,280)}<br/>
                                   ${parsingArray.overview.slice(280,350)}<br/>
                                   ${parsingArray.overview.slice(350,420)}<br/>
                                   ${parsingArray.overview.substring(420,490)}<br/>
                                </p>
        
                                    <div class="middel-bar">
                                        
                                    <label> Action</label>
                                        <label> Horror</label>
                                        <label> Romance</label>
                                        <label> SinceFiction</label>
                                    </div>
        
                                    <div class="option-buttons">
                                        <button class="watch-now" id='watch-now'>WATCH NOW</button>
                                        <button class="watch-now2" id='trailer'>TRAILER</button>
        
                                     </div><br/><br/>
        `
        document.getElementById("film-poster").appendChild(posterPhoto)
        document.getElementById("film-poster").appendChild(poster_title)
        poster_title.querySelector(".watch-now").addEventListener("click",()=>playVideo(parsingArray.id))
        poster_title.querySelector(".watch-now2").addEventListener("click",()=>playVideo(parsingArray.id))

        const recomendMovie = await fetch(`https://api.themoviedb.org/3/movie/${parsingArray.id}}/recommendations?api_key=${APIKEY}`)
        const recoJson = await recomendMovie.json()
        recoJson.results.forEach(indexValue =>{
            const recoDiv = document.createElement("div")
            recoDiv.innerHTML=`
            
              <div class="reco-box-one">
            
                                                <div class="reco-poster-pic"><img src="https://image.tmdb.org/t/p/w500${indexValue.backdrop_path}" /></div>
                                                <div class="reco-title">
                                                    <h3>${indexValue.original_title || "Un titled"}</h3>
                                                    <p>${indexValue.overview.substring(0,21)+"..."}</p>
                                                    <p>${Math.floor(indexValue.vote_average)} ⭐⭐⭐</p>
                                                </div>
            
                                    </div>                     
            `

            recoDiv.querySelector(".reco-box-one").addEventListener("click",()=>showDetails(indexValue))
            document.getElementById("flex-recomended").append(recoDiv)
        })


       }, 1000);


    }


}


const playVideo = async(id)=>{
    const videoFetching = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}`)
    const videoToJson =await videoFetching.json()
    console.log(videoToJson)
    if(videoToJson.results.length === 0){
        toast.warning("Movie Not Allowed Copy Right Issue" , {position:"top-center"})
    }else{
        toast.warning("Movie Not Allowed Copy Right Issue" , {position:"top-center"})
        document.querySelector(".movieFrame").style.display="flex"
        const videoKey = videoToJson.results[2].key
        document.querySelector(".movieFrame").innerHTML=`
               <div class="center-item">
                   <div class="close"><i class="fa-solid fa-xmark"></i></div>
                           <div class="video">
       
         <iframe
                   width="960"
                   height="515"
                   src="https://www.youtube.com/embed/${videoKey}"
                   title="YouTube video player"
                   frameBorder="0"
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                 ></iframe>
                           
                           
                           </div>
                   </div>
               
               `
               document.querySelector(".close").addEventListener("click",()=>closeFrame())
    }

}

const closeFrame = ()=>{
    document.querySelector(".movieFrame").style.display="none"
}

// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=YOUR_API_KEY
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=YOUR_API_KEY

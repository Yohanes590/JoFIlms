import { APIKEY } from './apiKey'
import { showDetails } from './route-script';
import { toast } from 'react-toastify';
export function nav_animation (){
   setTimeout(() => {
      document.querySelector('.navigation-bar').style.display="flex"
   }, 5000);
   addEventListener('scroll',()=>{
      const Yaxis = scrollY
      if(Yaxis > 145){
         document.querySelector('.navigation-bar').style.backdropFilter="blur(10px)"
      }else{
         document.querySelector('.navigation-bar').style.backdropFilter="blur(0px)"
      }
   })
}



export const gettingSearch = async()=>{
   const innerValue = document.getElementById('search-part').value
   if(window.location.pathname == "/detail"){
      window.location.pathname="/user-option/movie"
 }else{
   const searchTOapi = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${innerValue}`)
   const changeIntoJson  = await searchTOapi.json()
   const thaParrent= document.getElementById("recomended-videos")
   const GetPath= window.location.href
  if(changeIntoJson.results.length == 0){
   toast.warning("Result Not Found",{position:"top-center"})

  }else{
   while(thaParrent.firstChild){
    thaParrent.removeChild(thaParrent.firstChild)
   }
   changeIntoJson.results.forEach(indexValue =>{
      const DivElement = document.createElement("div")
      DivElement.className ="reco-card-info"
      DivElement.innerHTML =`

                    <div class="absolute-postion">
                            <div class="ab-items">
                            <h1><i class="fa-solid fa-circle-play"></i></h1>
                            <h2>${indexValue.title}</h2>
                            <h3>${indexValue.vote_average}</h3>
                            <p>${indexValue.overview.substring(0,100)} ... </p>
                            </div>
                        </div>   
                   <div class="poster-position">
                        <img src="https://image.tmdb.org/t/p/w500${indexValue.poster_path}" />
                    </div>                         

                </div>  
      `
      DivElement.querySelector(".absolute-postion").addEventListener("click",()=>showDetails(indexValue))
      document.getElementById("recomended-videos").append(DivElement)
   })
  }
 }
}

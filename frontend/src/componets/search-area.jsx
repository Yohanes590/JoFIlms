import '../componet-style/search-area.css'
import { FaPlayCircle } from "react-icons/fa";
import '../scripts/route-script'
import { APIKEY } from '../scripts/apiKey'
import { useState , useEffect } from 'react';
import { showDetails } from '../scripts/route-script';

function SearchArea(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 600, 
        slidesToShow: 5, 
        slidesToScroll: 1, 
        centerMode:true,
        centerPadding:"0px",
        responsive: [
            {
              breakpoint: 1024, 
              settings: {
                slidesToShow: 2,
                centerMode: true,
              },
            },
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1, 
                centerMode: false, 
              },
            },
          ],
          autoplay: true, 
          autoplaySpeed: 1500,
      };

  

      const gettingUrlPathName = ()=>{
        const RoutePath = window.location.pathname

        if(RoutePath == "/user-option/tv-show"){
            document.getElementById("user-display").innerText="Explore Tv Show"
            fetchingTvShow()
        }else if(RoutePath == "/user-option/favorite"){
          document.getElementById("user-display").innerText="Explore You Favorite"
        }else if(RoutePath == "/user-option/live-show"){
          document.getElementById("user-display").innerText="Explore Live Show"
          LiveShow()
        }else if (RoutePath == "/user-option/upcoming"){
          document.getElementById("user-display").innerText="Explore Upcoming Movies"
          Upcomming()
        }else if(RoutePath == "/user-option/movie"){
          fetchingMovie()
          document.getElementById("user-display").innerText="Explore New Movies"
        }


      }

setTimeout(() => {
  gettingUrlPathName()
}, 200);





const [ ArrayResiver , setArray ] = useState([])

const fetchingMovie = async ()=>{
  const AskingRequest = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`)
  const ChangingIntoJson = await AskingRequest.json()
  setArray(ChangingIntoJson.results)
}


const fetchingTvShow = async ()=>{
  const AskingRequest = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}`)
  const ChangingIntoJson = await AskingRequest.json()
  setArray(ChangingIntoJson.results)
}



const LiveShow = async ()=>{
  const AskingRequest = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKEY}`)
  const ChangingIntoJson = await AskingRequest.json()
  setArray(ChangingIntoJson.results)
}


const Upcomming = async ()=>{
  const AskingRequest = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`)
  const ChangingIntoJson = await AskingRequest.json()
  setArray(ChangingIntoJson.results)
}


const searchQuery = async ()=>{
  const SearchInput = document.getElementById("search-part")
  const SearchQuery = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=en-US&query=${SearchInput}&page=1&include_adult=false`)
  const Apiresult = await searchQuery.json()
  console.log(Apiresult)
}





    return(<>
           <div className="search-around">

            {/*  Hidden Menu Part */}


            <div className="tv-show-header">

                   <div className="left-border"><h3 id='user-display'> </h3></div> 
                   <div className="left-border"><p> Exporle Videos For Free </p></div> 

                   
            </div>


            {/* Recomended  Video Slider */}

                <div id='recomended-videos' className="recomended-videos">

                {ArrayResiver.map(indexValue =>{

                  return(

                    <div id='' className="reco-card-info" key={indexValue.id}>


                    <div className="absolute-postion">
                            <div className="ab-items">
                            <h1 onClick={()=>showDetails(indexValue)}><FaPlayCircle size="55"/></h1>
                            <h2>{indexValue.original_name}</h2>
                            <h3>{indexValue.vote_average}</h3>
                            <p>{indexValue.overview.substring(0,100)} ... </p>
                            </div>
                        </div>   
                   <div className="poster-position">
                        <img src={`https://image.tmdb.org/t/p/w500${indexValue.poster_path}`} />
                    </div>                         

                </div>  

                  )

                })}

                        

                </div>



           </div>





    
    </>)
}

export default SearchArea



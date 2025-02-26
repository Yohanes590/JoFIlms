import '../componet-style/card-style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import poseter1 from '../assets/banner2.jpg'
import poseter2 from '../assets/banner3.jpg'
import poseter3 from '../assets/banner5.jpg'
import { FaCirclePlay } from "react-icons/fa6";
import { useEffect , useState } from 'react';
import { APIKEY } from '../scripts/apiKey';
import { FaEye } from "react-icons/fa";
import { showDetails } from '../scripts/route-script';
function CardSection (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 600, 
        slidesToShow: 4, 
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


      const [ getTrendMovie , setTrendingMovie ] = useState([])

      useEffect(()=>{
          const FetchTrendingData = async()=>{
          const getTrending =await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`) 
          const trendingResult =await getTrending.json()
          setTrendingMovie(trendingResult.results)
        }
        FetchTrendingData()

      },[])
    
    return(<>

    <div className="back-banner">
    <center>
      <h1>Trean<span id='light-blue'>ding</span></h1>
<div className="line"></div>
<h2><span id='light-blue' >Mov</span>ies</h2>
</center>


    <div className="carding-section">


            <div id='trending-append-child' className="felx-card-section">

            <Slider {...settings}>

              
{getTrendMovie.map(arrayValue =>{
 return(
  <div className="slide slide1" key={arrayValue.id}>
  {/*  glass cart */}
  
                      <div className="each-card">
                              <div className="movi-photo">
                                
                                  <img src={`https://image.tmdb.org/t/p/w500${arrayValue.backdrop_path}`}  />
                              
                              </div>
                                      <div className="movi-info">
                                      <h3>{arrayValue.title || "Untitled Movie"}</h3>
                                      <h3><FaEye/> {arrayValue.vote_count || "No Vews"}M</h3>
                                      <h3>⭐⭐{arrayValue.vote_average || "Un Rated Movie"}/10 ⭐⭐</h3>
                                      
                                      <button onClick={()=>window.location="/user-option/movie"}>Watch Now <FaCirclePlay /></button>
                                      </div>
                          </div> 
                          
  {/*  glass cart */}                   
              </div>
 
 )
  
})}
            
   



      </Slider>


            </div>


    </div>
    </div>
    </>)
}

export default CardSection
import '../componet-style/topRated.css'
import { FaCertificate } from "react-icons/fa6";
import posterOne from '../assets/banner6.avif'
import { FaCirclePlay } from "react-icons/fa6";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { APIKEY } from '../scripts/apiKey';
import { useState ,useEffect } from 'react';
function TopRated (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 600, 
        slidesToShow: 3, 
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

        const [ TopRatedArray , setTopArray ] = useState([])
        
        useEffect(()=>{
            const fetchTopRated = async ()=>{
                const fechTopRate = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}`)
                const topRatedApi = await fechTopRate.json()
                setTopArray(topRatedApi.results)
            }
            fetchTopRated()
        },[])

    return(<>
    
            <div className="topRated-place">

            <center>
                <div className="topRated-header">
                    <h2><FaCertificate/> Top Rated</h2>
                    <div className="line"></div>
                    <h3>Movies Box Office</h3>
                </div>
            </center>


            <div className="top-rated-card">


              <Slider {...settings}>


               {TopRatedArray.map(indexValue =>{

                    return(
                    
              

              <div className="slide slide1" key={indexValue.id}>
                <div className="each-rate-card">

                    <div className="play-button">
                <div className="detail-pages">
                    <center>
                    <FaCirclePlay onClick={()=>window.location="/user-option/movie"} size="40"/>
                    <h2>{indexValue.original_title}</h2>
                    <h3>{indexValue.vote_average}</h3>
                    <p>{indexValue.overview.substring(0,80)}...</p>
                    </center>
                </div>
                    </div>
                    
                    <div className="movie-poster">
                        <img src={`https://image.tmdb.org/t/p/w500${indexValue.backdrop_path}`} />
                    </div>

                </div>
                </div>
           
                    
                    
                    )
            
               })} 




                </Slider>
            </div>



            </div>
    
    </>)
}

export default TopRated

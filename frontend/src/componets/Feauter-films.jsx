import '../componet-style/feauter-films.css'
import filmPoster from '../assets/banner4.avif'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import { useState , useEffect } from 'react';
import { APIKEY } from '../scripts/apiKey';
import { FaEye } from "react-icons/fa";
function HeroSection (){
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

      const [ feauterFilm , setFeauterFilm ] = useState([])

        useEffect(()=>{
            const feauterMovieFunction = async()=>{
                const feauterData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`)
                const feauterResult = await feauterData.json()
                setFeauterFilm(feauterResult.results)
            }
            feauterMovieFunction()
        },[])

    return(<>

        <div className="feauter-section">

        

            <div className="text-banner-section">
                <center>

                <h1>Featured <span id='yellow-color'>Movies<MdMovieCreation/></span> </h1>
                <div className="line"></div>
                <h2>A Collection of <span id='yellow-color'>Block</span>busters</h2>
                </center>
            </div>



                {/* Card Start */}

            <div className="card-section-flex-part">
                
            <Slider {...settings}>

            {feauterFilm.map(indexValue =>{
               return(

                        <div className="slide slide1" key={indexValue.id}>
                        <div className="card-section">
                            <div className="film-poster">
                                <img src={`https://image.tmdb.org/t/p/w500${indexValue.backdrop_path}`} />
                            </div>
                            <div className="discription-part">
                                <h2>{indexValue.title} <FaCrown /></h2><br/>
                                    <h3><FaEye/> {indexValue.popularity || "No View"}M</h3>
                                <h3>⭐⭐{indexValue.vote_count}⭐⭐</h3><br/>

                                <button onClick={()=>window.location="/user-option/movie"}>Watch Now <FaPlayCircle /> </button>
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

export default HeroSection
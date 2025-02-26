import "../componet-style/tv-style.css";
import { FaTv } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import image from '../assets/banner3.jpg';
import { FaPlayCircle } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { APIKEY } from "../scripts/apiKey";
import { useState , useEffect } from "react";
function TvShow (){
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

        const [ fetchTvShow , setTvShow ] = useState([])
        
        useEffect(()=>{
                const tvShowDataBase =async ()=>{
                        const apiInformation = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}`)
                        const ApiResultInformation = await apiInformation.json()
                        setTvShow(ApiResultInformation.results)
                }
                tvShowDataBase()
        },[])

    return(<>
    
            <div className="tv-show-componet">

                <div className="header-part">
                <h2>Tv Show <FaTv/></h2>
                <h3>Tv Programs Entertainment <FaGripLines/></h3>
                </div>

                    

                    <div className="tv-show-cards">


                    <Slider {...settings}>

                    

                                {fetchTvShow.map(indexValue =>{
                                       return(


                                <div className="slide slide1" key={indexValue.id}>
                          {/*  card part end */}
                          <div className="each-tv-card">
                                        <div className="image">
                                                <div className="absoute-button" id="absoute-button">
                                                <FaPlayCircle onClick={()=>window.location="/user-option/movie"} size="35"/>
                                                </div>
                                                <img src={`https://image.tmdb.org/t/p/w500${indexValue.poster_path}`} alt="" />
                                        </div>


                                <div className="tv-discription">
                                        <h3>{indexValue.name}</h3>
                                      <p>  {indexValue.overview.substring(0,200)} ...</p>
                                        <p id="rate">{indexValue.vote_average}</p>
                                        <button onClick={()=>window.location="/user-option/movie"}>Watch Now <FaPlayCircle /></button>
                                </div>
                            </div>
                              {/*  card part end */}
                        </div>        

                                       )
                                })}



                           </Slider>

                    </div>


            </div>
    
    </>)
}

export default TvShow
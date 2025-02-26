import '../componet-style/reco-style.css'
import poster from '../assets/banner7.avif'
import { FaPlayCircle } from "react-icons/fa";
import { FaPager } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaCrown } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { APIKEY } from '../scripts/apiKey'
const Recomend = ()=>{
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
      const [ getApiResponce , setApiresponce ] = useState([])

      useEffect(()=>{
          async  function fetchSomeData(){
                const gettingApiUpdate = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`)
                const changingRespo = await gettingApiUpdate.json()
               setApiresponce(changingRespo.results)
            }

            fetchSomeData()
      },[])
    return(<>
    
    <div className="recomened">



    <div className="reco-line">
        <div className="left-line">
            <h2>Recomended <FaPager/></h2>
                <h3>For You Page </h3>
            </div>
    </div>


            <div className="recomended-card">


        
        {getApiResponce.map(indexValue =>{
            return(

<div className="reco-card" key={indexValue.id}>
    <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w500${indexValue.backdrop_path}`}  />
    </div>
    <div className="dscription">
        <h3>{indexValue.title} <FaCrown/></h3>
        <p>Popurality{indexValue.popularity} </p>
             <button onClick={()=>window.location="/user-option/movie"}>Watch Now <FaPlayCircle/></button>
    </div>
    </div>

            )
        })}





            </div>
            </div>

    
    </>)
}

export default Recomend
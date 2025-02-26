import "../componet-style/home-style.css"
import banner from '../assets/banner2.jpg'
import banner2 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.avif'
import banner5 from '../assets/banner5.jpg'
import banner6 from '../assets/banner6.avif'
import banner7 from '../assets/banner7.avif'
import { Typewriter } from "react-simple-typewriter";
import { FaPlayCircle } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
function HomePage (){
    return(<>
     
     
        <div className="compontens" >



            <div className="left-bar">

                <h1>
                <Typewriter
        words={["Discover Your", "Next Favorite Movie"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={1500}
      />
                </h1>


                <h2>Explore a world of films from all genres, available at your fingertips.</h2>
                <p>MovieVerse is a comprehensive film streaming platform designed to provide an 
                    easy and seamless experience for movie lovers everywhere.</p>

                    <div className="home-buttons">
                    <button id="watch-now" onClick={()=>window.location.href="/user-option/movie"}>Watch Now <FaPlayCircle /></button>
                    <button id="explore-now" onClick={()=>window.location.href="/user-option/movie"}>Explore Movie <MdMovie /></button>
                    </div>


            </div>




            <div className="middel">

                    <div className="image">
                        <img src={banner}  />
                        <img id="size-one" src={banner2}  />
                        <img src={banner4}  />
                        <img id="size-one" src={banner5}  />
                        <img src={banner6}  />
                        <img id="size-one" src={banner7}  />
                    </div>

            </div>



        </div>

    
    </>)
}

export default HomePage
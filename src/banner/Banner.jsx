import axios from '../axios';
import { useEffect, useState } from 'react'
import './banner.css'
import requests from '../constants/Constants';

export default function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
         async function fetchData(){
             const request = await axios.get(requests.NetflixOriginals);
             setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
             return request;

         }
         fetchData();
      
    }, [])
    function truncateString(str, num) {
        return str?.length > num ? str.substr(0, num-1) + "..." : str;
        
      }
    
    return (
        <div className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}
        >
            <div className="bannercontent">
                <h1 className="bannertitle">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannerbuttons">
                    <button className="bannerbutton">Play</button>
                    <button className="bannerbutton">My List</button>
                </div>
                <h3 className="description">{truncateString(movie?.overview,150)}</h3>
            </div>
    <div className="fadebottom"></div>
            
            
        </div>
    )
}

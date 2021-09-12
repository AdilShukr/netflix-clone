import axios from '../axios'
import { useEffect, useState } from 'react'
import './row.css'
import { imgUrl } from '../constants/Constants';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export default function Row({title, fetchUrl,isLargerow }) {
    const[movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(() =>{
         async function fetchData(){
             const request = await axios.get(fetchUrl);
             setMovies(request.data.results);
             return request;

        }
        fetchData();
    },[fetchUrl]);
        const opts = {
        height:"400",
        width:"100%",
        playerVars : {
            autoplay:1,
        },

        };
        const handleclick = (movie) => {
            if(trailerUrl){
                setTrailerUrl("");
            }
            else{
                movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlparams =new URLSearchParams (new URL(url).search);
                   setTrailerUrl(urlparams.get("v"));
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
    return (
        <div className="row">
            <h1 className="rowtitle">{title}</h1>
            <div className="rowposters">
                {movies.map(movie=> (
                    <img className={`rowposter ${isLargerow && "rowposterlarge"}`}
                    key = {movie.id}
                    onClick = {() =>handleclick(movie)}
                     src={`${imgUrl}${ isLargerow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
                    { trailerUrl && <YouTube opts={opts} videoId={trailerUrl} />}
                
        </div>
    )
}

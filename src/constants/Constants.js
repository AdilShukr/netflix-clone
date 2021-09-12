export const API_KEY = '876123351bd703aa2732c59143d3d506';
export const baseURL='https://api.themoviedb.org/3';
export const imgUrl = 'https://image.tmdb.org/t/p/original/'

const requests = {
   
    NetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    ActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    TrendingNow:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    HorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}
export default requests;
// netflix-logo='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'

// nav-avatar='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
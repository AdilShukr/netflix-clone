import './app.css';
import Banner from './banner/Banner';
import requests from './constants/Constants'
import Navbar from './navbar/Navbar';
import Row from './row/Row'

export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.NetflixOriginals} isLargerow/>
      <Row title="TrendingNow" fetchUrl={requests.TrendingNow}/>
      <Row title="ActionMovies" fetchUrl={requests.ActionMovies}/>
      <Row title="HorrorMovies" fetchUrl={requests.HorrorMovies}/>
      <Row title="RomanceMovies" fetchUrl={requests.RomanceMovies}/>

    </div>
  )
}


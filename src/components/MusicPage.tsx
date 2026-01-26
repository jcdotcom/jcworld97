import flop from '../assets/ef3.jpg';
import album from '../assets/albumoftheday3.jpg';
import './Components.css';

const MusicPage = () => {
    return(
      <div className="music-wrapper">
          <div className="music-body">
            <img src={album} alt="jc's album of the day" className="music-pic" />
            <h1>{"Love by Flipper"}</h1>
          </div>
          <div className="music-div-side">
            <img src={flop} alt="pic" className="music-pfp"/>
            <p>{"Eventually this page is gonna host my own music!"}</p>
            <p>{"For now, here's the album I've had on repeat lately..."}</p>
          </div>
      </div>
    );
};

export default MusicPage;
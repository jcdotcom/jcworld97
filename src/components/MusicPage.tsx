import album from '../assets/albumoftheday3.jpg';
import './Components.css';

const MusicPage = () => {
    return(
      <div className="music-wrapper">
          <div className="music-body">
            <img src={album} alt="jc's album of the day" className="music-pic" />
            <p>{"Love by Flipper"}</p>
          </div>
          <div className="music-div-side">
            <p>{"Eventually this page is gonna host my own music!"}</p>
            <p>{"For now, here's the album I've had on repeat lately..."}</p>
          </div>
      </div>
    );
};

export default MusicPage;
import flop from '../assets/ef3.jpg';
import album from '../assets/albumoftheday.jpg';
import './Components.css';

const MusicPage = () => {
    return(
      <div className="music-wrapper">
          <div className="music-body">
            <img src={album} alt="jc's album of the day" className="music-pic" />
            <h1>{"Moenai Hai by The Gerogerigegege"}</h1>
          </div>
          <div className="music-div-side">
            <img src={flop} alt="pic" className="music-pfp"/>
            <p>{"Eventually this is gonna be a lil music player for whatever I'm listening to at the time (or maybe whatever I'm making at the time??)"}</p>
            <p>{"For now, here's the album I've had on repeat lately"}</p>
          </div>
      </div>
    );
};

export default MusicPage;
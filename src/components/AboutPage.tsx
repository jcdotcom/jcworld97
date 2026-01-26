import flop from '../assets/ef3.jpg';
import cat2 from '../assets/cat2.gif';
import './Components.css';

const handleGitHubClick = () => {
  window.open("https://github.com/jcdotcom", "_blank");
}

const handleInquiriesClick = () => {
  window.open("mailto:jayceew@pm.me", "_blank");
}

const AboutPage = () => {
    return(
      <div className="about-wrapper">
        <div className="about-div-side">
          <img src={flop} alt="pic" className="about-pfp"/>
          <div className="about-div-links">
            <p onClick={handleGitHubClick}>github</p> {/* TODO add thumbnails here */}
            <p onClick={handleInquiriesClick}>inquiries</p>
          </div>
        </div>
        <div className="about-body">
          <div className="about-div-upper">
            <div className="about-div-text">
              <h1>JCWORLD.ORG</h1>
              <div className="about-div-bio">
                
              </div>
            </div>
          </div>
          <div className="about-div-lower">
            <img src={cat2} alt="pic" className="about-pic" />
            <h4>ver 0.22 - 01/26/2026<br/>
            Start Menu is way more optimized now!</h4>
          </div>
        </div>
      </div>
    );
};

export default AboutPage;
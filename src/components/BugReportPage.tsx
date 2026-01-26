import bug from '../assets/bug.gif';
import './Components.css';

const BugReportPage = () => {
    return(
      <div className="bug-wrapper">
        {/* <div className="bug-div-side"> */}
            <img src={bug} alt="jc's album of the day" className="bug-report-pic" />
            {/* <p>{"Eventually this page is gonna host my own music!"}</p> */}
            {/* <p>{"For now, here's the album I've had on repeat lately..."}</p> */}
        {/* </div> */}
        <div className="bug-body">
            <h1>{"Click the button below to send me a bug report"}</h1>
            <button>Email me</button>
        </div>
      </div>
    );
};

export default BugReportPage;
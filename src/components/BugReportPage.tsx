import bug from '../assets/bug.gif';
import './Components.css';

const BugReportPage = () => {

  const handleReportClick = () => {
    window.open("mailto:jayceew@pm.me?subject=jcworld.org bug report", "_blank");
  }
    return(
      <div className="bug-wrapper">
        <div className="bug-div-side">
            <img src={bug} alt="big pic" className="bug-report-pic" />
        </div>
        <div className="bug-body">
            <h1>{"Click the button below to send me a bug report"}</h1>
            <button onClick={handleReportClick}>Email me</button>
        </div>
      </div>
    );
};

export default BugReportPage;
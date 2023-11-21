import { Link } from 'react-router-dom';
import webDevTutoring from '/images/Tutor.jpeg'
import codeReview from '/images/codeReview.jpeg';
import websiteBuilding from '/images/websiteBuilding.jpeg';
import resumeBuilding from '/images/resumeBuilder.png';

const Services = () => {
  return (
      <div>
          <h1 style={{textAlign:"center"}}><strong>Services</strong></h1>

          <h3>Click on the service you would need:</h3>
          <div className="row">
              <div className="col">
                 <Link to="/search">
                     <img src={webDevTutoring} alt="Web Development Tutoring" className="img-fluid" />
                 </Link>
              </div>
              <div className="col">
                 <Link to="/search">
                     <img src={codeReview} alt="Code Review" className="img-fluid" />
                 </Link>
              </div>
              <div className="col">
                 <Link to="/search">
                     <img src={websiteBuilding} alt="Website Building" className="img-fluid" />
                 </Link>
              </div>
              <div className="col">
                 <Link to="/resume">
                     <img src={resumeBuilding} alt="Resume Building" className="img-fluid" />
                 </Link>
              </div>
          </div>
      </div>
  )
}

export default Services

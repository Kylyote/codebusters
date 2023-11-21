import { Link } from 'react-router-dom';
import webDevTutoring from '/images/Tutor.jpeg'
import codeReview from '/images/codeReview.jpeg';
import websiteBuilding from '/images/websiteBuilding.jpeg';
import resumeBuilding from '/images/resumeBuilder.png';

const Services = () => {
   return (
       <div style={{marginLeft: '15px'}}>
           <h1 style={{textAlign:"center", fontSize: '70px'}}><strong>Services Offered</strong></h1>

            <br></br>
           <h2><strong>Webdevlopment Tutoring</strong></h2>
           <p>Suck on a project? Don't know where to beging? Stress no more. Help is just a click away!</p>
           <p><Link to="/search"><img className='glow-on-hover' src={webDevTutoring} alt="Web Development Tutoring" style={{height: '200px', width: '300px'}} /></Link></p>
           <br></br>

            <h2><strong>Code Review</strong></h2>
            <p>Got a bug you can't figure out? Or finished with a project and in need of a professional polish?</p>
           <p><Link to="/search"><img className='glow-on-hover' src={codeReview} alt="Code Review"style={{height: '200px', width: '300px'}} /></Link></p>
           <br></br>

            <h2><strong>Website Building</strong></h2>
            <p>Need a website built? Or maybe just a few pages? We can help!</p>
           <p><Link to="/search"><img className='glow-on-hover' src={websiteBuilding} alt="Website Building" style={{height: '200px', width: '300px'}}/></Link></p>

           <br></br>
            <h2><strong>Resume Building</strong></h2>
            <p>Do you need a resume built emphasizing your coding experience? Help is just a few clicks away!</p>
           <p><Link to="/resume"><img className='glow-on-hover' src={resumeBuilding} alt="Resume Building"style={{height: '200px', width: '300px'}} /></Link></p>
       </div>
   )
}

export default Services


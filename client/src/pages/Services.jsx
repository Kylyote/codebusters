import { Link } from 'react-router-dom';
import webDevTutoring from '/images/Tutor.jpeg'
import codeReview from '/images/codeReview.jpeg';
import websiteBuilding from '/images/websiteBuilding.jpeg';
import resumeBuilding from '/images/resumeBuilder.png';

const Services = () => {
  return (
      <div className="container">
          <h1 className="text-center" style={{fontSize: '70px'}}><strong>Services</strong></h1>
          <br></br>
          <div className="row">
              <div  style={{backgroundColor:"red"}}className="col-md-6 text-zoom">
                 <h2 className="text-center"><strong>Web Devlopment Tutoring</strong></h2>
                 <p> <i>Our tutors provide personalized web development tutoring that will guide you through the process of creating a website. Our tutors have extensive experience in various web development languages and frameworks, and they will help you understand and implement best practices in your code. Whether you're a beginner or an experienced developer looking to enhance your skills, our tutoring service is designed to cater to your needs. With our expert guidance, you can overcome any hurdles and enhance your web development skills.</i></p>
                 <p><Link to="/search"><img className='glow-on-hover img-fluid' src={webDevTutoring} alt="Web Development Tutoring" /></Link></p>
              </div>
              <div style={{backgroundColor:"lightblue"}} className="col-md-6 text-zoom">
                 <h2 className="text-center"><strong>Code Review</strong></h2>
                 <p><i>Our code review service is designed to help you identify and rectify any issues in your code. Our review specialist excel in providing professional reviews that ensure your code is clean, efficient, and ready for deployment. Whether you're struggling with a bug or need a professional review of a completed project, our code review specialists can help. Our team of experienced developers will provide detailed feedback and suggestions to improve your code, ensuring that it meets the highest standards of quality and performance.</i></p>
                 <p><Link to="/search"><img className='glow-on-hover img-fluid' src={codeReview} alt="Code Review" /></Link></p>
              </div>
          </div>
          <div className="row">
              <div style={{backgroundColor:"green"}} className="col-md-6 text-zoom">
                 <h2 className="text-center"><strong>Website Building</strong></h2>
                 <p><i>Our coders specialize in building websites from scratch or adding new pages to existing sites. Our website building service ensures your website is not only functional but also visually appealing and user-friendly. We use the latest web development technologies and best practices to create websites that are optimized for performance and are ready to attract and retain your target audience. Whether you're a small business looking for an online presence or a large corporation needing a comprehensive website, we can help.</i></p>
                 <p><Link to="/search"><img className='glow-on-hover img-fluid' src={websiteBuilding} alt="Website Building" /></Link></p>
              </div>
              <div style={{backgroundColor:"orange"}} className="col-md-6 text-zoom">
                 <h2 className="text-center"><strong>Resume Building</strong></h2>
                 <p><i>Creating a resume that highlights your coding experience and showcases your skills can be a challenging task. Our resume builder is designed to help you create a resume that stands out and is tailored to your unique skills and experiences. It uses clear, eye-friendly fonts, white space, and an eye-catching resume header to create the best user experience and keep recruiters on the path. We can help you save your professional web developer resume as a PDF, ensuring the layout stays in shape as it flits through the ether. Whether you're a recent graduate or an experienced developer looking to change careers, our resume builder can help you create a resume that will make a great first impression.</i></p>
                 <p><Link to="/resume"><img className='glow-on-hover img-fluid' src={resumeBuilding} alt="Resume Building" /></Link></p>
              </div>
          </div>
      </div>
  )
}

export default Services

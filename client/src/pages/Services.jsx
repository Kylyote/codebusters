import { Link } from 'react-router-dom';

const Services = () => {
   return (
       <div>
           <h1>Services</h1>
           <p>Web Development Tutoring</p>
           <p>Code Reviewing</p>
           <p>Website Building</p>
           <p><Link to="/resume">Resume Building</Link></p>
       </div>
   )
}

export default Services

import { Link } from 'react-router-dom';

const Services = () => {
   return (
       <div>
           <h1>Services</h1>
           <p><Link to="/search">Web Development Tutoring</Link></p>
           <p><Link to="/search">Code Review</Link></p>
           <p><Link to="/search">Website Building</Link></p>
           <p><Link to="/resume">Resume Building</Link></p>
       </div>
   )
}

export default Services

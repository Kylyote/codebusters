import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Search = () => {
 const navigate = useNavigate()

 /* search component state */
const [service, setService] = useState('');
const [experience, setExperience] = useState('');
const [languages, setLanguages] = useState('');
/* end search component state */

 const handleSubmit = (event) => {
   event.preventDefault()

   console.log(service, experience, languages, "search state Search.jsx line 16")

   /* passes search state to results page */
   navigate('/results', {state: {service, experience, languages}})
 }
  return(
      <div>
          <br></br>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                 <label htmlFor="service">Service Desired</label>
                 <select className="form-control" id="service" defaultValue=""onChange={(e) => setService(e.target.value)}>
                  {/* onChange  updates the stat of the form based on inputs  */}
                   <option value="" disabled>Help Needed</option>
                   <option>Tutoring</option>
                   <option>Code Review</option>
                   <option>Website Building</option>
                 </select>
              </div>
              <br></br>
              <div className="form-group">
                 <label htmlFor="experience">Years of Experience</label>
                 <select className="form-control" id="experience" defaultValue=""onChange={(e) => setExperience(e.target.value)}> 
                 {/* onChange  updates the stat of the form based on inputs  */}
                   <option value="" disabled>Experience Level</option>
                   <option>Youngling</option>
                   <option>Padawan</option>
                   <option>Jedi Knight</option>
                   <option>Jedi Master</option>
                   <option>Jedi Council</option>
                 </select>
              </div>
              <br></br>
              <div className="form-group">
                 <label htmlFor="languages">Coding Languages Known</label>
                 <select className="form-control" id="languages" defaultValue=""onChange={(e) => setLanguages(e.target.value)}>
                  {/* onChange  updates the stat of the form based on inputs  */}
                   <option value="" disabled>Language</option>
                   <option>JavaScript</option>
                   <option>Python</option>
                   <option>Java</option>
                   <option>C++</option>
                   <option>C#</option>
                 </select>
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary">Search</button>
          </form>
      </div>
  )
  }
  
  export default Search
 
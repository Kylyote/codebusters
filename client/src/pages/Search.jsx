import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

const Search = () => {
 const navigate = useNavigate()
 const location = useLocation()

 /* search component state */
 const [services, setService] = useState(location.state?.service || '');
const [skill, setSkill] = useState('');
const [language, setLanguage] = useState('');
/* end search component state */

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(services, language, skill, "search state Search.jsx line 16")
  /* navigate to SearchResults.jsx with search state */
  navigate('/results', {state: {services: event.target.services.value, language: event.target.language.value, skill: event.target.skill.value}})
}

  return(
      <div style={{marginLeft:"15px"}}>
          <br></br>
          <h1 style={{textAlign:'center'}}><strong>How Can We Help You</strong></h1>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                 <label htmlFor="services"><strong>Service Desired</strong></label>
                 <select className="form-control" id="services" defaultValue=""onChange={(e) => setService(e.target.value)}>
                  {/* onChange  updates the stat of the form based on inputs  */}
                   <option value="" disabled>Help Needed</option>
                   <option>Tutoring</option>
                   <option>Code Review</option>
                   <option>Website Building</option>
                 </select>
              </div>
              <br></br>
              <div className="form-group">
                 <label htmlFor="language"><strong>Desired Coding Language</strong></label>
                 <select className="form-control" id="language" defaultValue=""onChange={(e) => setLanguage(e.target.value)}>
                  {/* onChange  updates the stat of the form based on inputs  */}
                   <option value="" disabled>Language</option>
                   <option>JavaScript</option>
                   <option>Python</option>
                   <option>Java</option>
                   <option>C++</option>
                   <option>C#</option>
                    <option>PHP</option>
                    <option>SQL</option>
                    <option>Swift</option>
                    <option>Ruby</option>
                    <option>Go</option>
                    <option>Assembly</option>
                    <option>Perl</option>
                    <option>Scala</option>
                    <option>R</option>
                    <option>Objective-C</option>
                    <option>Visual Basic</option>
                    <option>Matlab</option>
                    <option>Kotlin</option>
                    <option>Other</option>


                 </select>
              </div>
              <br></br>
              <div className="form-group">
                 <label htmlFor="skill"><strong>Skill Level Desired</strong></label>
                 <select className="form-control" id="skill" defaultValue=""onChange={(e) => setSkill(e.target.value)}> 
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
              <button type="submit" className="btn btn-primary">Search</button>
          </form>
      </div>
  )
  }
  
  export default Search
 
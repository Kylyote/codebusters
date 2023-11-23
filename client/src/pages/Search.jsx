import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import advertise from '/images/advertise1.jpeg'
import languagePic from '/images/language.jpeg'
import service from '/images/service.png'
import SkillPic from '/images/Skill.jpeg'

const Search = () => {
   const location = useLocation()
   const navigate = useNavigate()

 /* search component state */
 const [services, setService] = useState(location.state?.services);
const [skill, setSkill] = useState('');
const [language, setLanguage] = useState('');
/* end search component state */

console.log(services, language, skill, "search state Search.jsx line 18")
const handleSubmit = (event) => {
  event.preventDefault()
  console.log(services, language, skill, "search state Search.jsx line 16")
  /* navigate to SearchResults.jsx with search state */
  navigate('/results', {state: {services: event.target.services.value, language: event.target.language.value, skill: event.target.skill.value}})
}

  return(
   <div className="container">
       <div className="row">
      <div className='col-md-6' style={{marginLeft:"15px"}}>
          <br></br>
          <h1 style={{textAlign:'left', color:'blue', fontSize:"50px"}}><strong>How Can We Help You?</strong></h1>
          <form onSubmit={handleSubmit}>
            <br></br>
              <div className="form-group">
                 <label style={{color:'blue'}} htmlFor="services"><strong>Service</strong></label>
                
                 <select className="form-control glow-on-hover" id="services" defaultValue=""onChange={(e) => setService(e.target.value)}>
                  {/* onChange  updates the stat of the form based on inputs  */}
                   <option value="" disabled>Help Needed</option>
                   <option>Tutoring</option>
                   <option>Code Review</option>
                   <option>Website Building</option>
                 </select>
                  <img src={service}></img>
              </div>
              <br></br>
              <div className="form-group">
                 <label style={{color:'blue'}} htmlFor="language"><strong> Coding Language</strong></label>
                 <select className="form-control glow-on-hover" id="language" defaultValue=""onChange={(e) => setLanguage(e.target.value)}>
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
                <img src={languagePic}></img>
              </div>
               
              <br></br>
              <div className="form-group">
                 <label style={{color:'blue'}} htmlFor="skill"><strong>Skill Level Required</strong></label>
                 <select className="form-control glow-on-hover" id="skill" defaultValue=""onChange={(e) => setSkill(e.target.value)}> 
                 {/* onChange  updates the stat of the form based on inputs  */}
                   <option value="" disabled>Experience Level</option>
                   <option>Youngling</option>
                   <option>Padawan</option>
                   <option>Jedi Knight</option>
                   <option>Jedi Master</option>
                   <option>Jedi Council</option>
                 </select>
                 <img src={SkillPic}></img>
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary glow-on-hover spin-on-hover">Search</button>

          </form>
      </div>
      <div className="col-md-3">
         <br></br>
         <br></br>
         <br></br>
         <img className="glow-on-hover spin-on-hover" src={advertise} alt="search" style={{width: "500px", height: "500px"}} onClick={() => window.location.href = "mailto:codebusters@gmail.com?subject=Advertise%20with%20Code%20Busters&body=I%20would%20like%20to%20advertise%20my%20business%20with%20Code%20Busters!"}></img>
      </div>
       </div>
   </div>

  )
  }
  
  
  
  export default Search
 
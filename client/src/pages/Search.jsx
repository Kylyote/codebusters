/* importing necessary modules and assets */
import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import advertise from '/images/advertise1.jpeg'
import languagePic from '/images/languageAnimated.gif'
import service from '/images/servicesAnimated.gif'
import SkillPic from '/images/animatedSkill.gif'

/* define image style */
const myImageStyle = { width: '100%', height: '100%', minHeight: '200px', maxHeight: '500px', objectFit: 'cover' };

/* search component */
const Search = () => {
   const location = useLocation()
   const navigate = useNavigate()

 /* search component state variable initialization */
 const [services, setService] = useState('');
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
   <div>
     
          <h1 style={{textAlign:'center', fontSize:"50px"}}><strong>Help is Just Three Steps Away</strong></h1>
          
          <form style={{width: '100%'}} onSubmit={handleSubmit}>

 <div className="container">
   <div className="row">
     <div className="col-md-4">
       <label className='col-md-3' style={{color:'blue',fontSize:'2.5rem'}} htmlFor="services"><strong></strong></label>
       <img src={service} style={myImageStyle}></img>
       <select style={{backgroundColor: "lightgreen", width:"", fontSize:"25px"}} className="form-control glow-on-hover" id="services" value={services} onChange={(e) => setService(e.target.value)}>
         <option value="" disabled><strong>Step 1.</strong> Select Service Needed</option>
         <option>Tutoring</option>
         <option>Code Review</option>
         <option>Website Building</option>
       </select>
     </div>
     
       <div className="col-md-4">
     

     
           <label style={{color:'blue', fontSize:"2.5rem"}} htmlFor="language"><strong></strong></label>
           <img src={languagePic} style={{...myImageStyle, marginTop:"20px"}}></img>
           <select style={{backgroundColor: "white", fontSize:"25px"}} className="form-control glow-on-hover" id="language" defaultValue=""onChange={(e) => setLanguage(e.target.value)}>
               <option value="" disabled>Step 2. 
              ChooseLanguage</option>
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
       <div className="col-md-4">
           <label style={{color:'blue', fontSize:"2.5rem"}} htmlFor="skill"><strong></strong></label>
           <img src={SkillPic} style={{...myImageStyle, marginTop:"20px"}}></img>
           <select style={{backgroundColor: "lightblue", fontSize:"25px"}} className="form-control glow-on-hover" id="skill" defaultValue=""onChange={(e) => setSkill(e.target.value)}> 
               <option value="" disabled><strong>Step 3. </strong> Strength Needed</option>
               <option>Youngling</option>
               <option>Padawan</option>
               <option>Jedi Knight</option>
               <option>Jedi Master</option>
               <option>Jedi Council</option>
           </select>
       </div>
   </div>
</div>
<div style={{textAlign: 'center'}}>
    
         <br></br>
   <button type="submit" className="btn btn-primary glow-on-hover spin-on-hover">Search</button>
</div>
 
          </form> 
      {/* </div> */}
     <br></br>
       
         <img className="glow-on-hover" src={advertise} alt="search" style={{marginLeft:"335px",   width: "64%", height: "400px"}} onClick={() => window.location.href = "mailto:codebusters@gmail.com?subject=Advertise%20with%20Code%20Busters&body=I%20would%20like%20to%20advertise%20my%20business%20with%20Code%20Busters!"}></img>
    
      
   </div>
  )
  }
  
  

  export default Search
 
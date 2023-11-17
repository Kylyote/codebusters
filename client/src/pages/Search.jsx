
import {useNavigate} from 'react-router-dom'

const Search = () => {
 const navigate = useNavigate()

 const handleSubmit = (event) => {
   event.preventDefault()
   navigate('/results')
 }
  return(
      <div>
          <br></br>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                 <label htmlFor="service">Service Desired</label>
                 <select className="form-control" id="service" defaultValue="">
                   <option value="" disabled>Help Needed</option>
                   <option>Tutoring</option>
                   <option>Code Review</option>
                   <option>Website Building</option>
                 </select>
              </div>
              <br></br>
              <div className="form-group">
                 <label htmlFor="experience">Years of Experience</label>
                 <select className="form-control" id="experience" defaultValue="">
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
                 <select className="form-control" id="languages" defaultValue="">
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
 
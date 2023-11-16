const Search = () => {

    return(
<div>
    <br></br>
<form>
<div class="form-group">
   <label for="experience">Service Desired</label>
   <select class="form-control" id="service">
   <option value="" disabled selected>Help Needed</option>
     <option>Tutoring</option>
     <option>Code Review</option>
     <option>Website Building</option>
   </select>

 </div>
 <br></br>
 <div class="form-group">
   <label for="experience">Years of Experience</label>
   <select class="form-control" id="experience">
   <option value="" disabled selected>Experience Level</option>
     <option>Youngling</option>
     <option>Padawan</option>
     <option>Jedi Knight</option>
     <option>Jedi Master</option>
     <option>Jedi Council</option>
   </select>

 </div>
 <br></br>
 <div class="form-group">
   <label for="languages">Coding Languages Known</label>
   <select class="form-control" id="languages">
   <option value="" disabled selected>Language</option>
     <option>JavaScript</option>
     <option>Python</option>
     <option>Java</option>
     <option>C++</option>
     <option>C#</option>
   </select>
 </div>
 <br></br>
 <button type="submit" class="btn btn-primary">Search</button>
</form>

        
</div>
    )
}

export default Search
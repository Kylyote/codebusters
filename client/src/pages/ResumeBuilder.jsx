import React, { useState } from "react";
import { jsPDF } from 'jspdf';
import qrcodeSVG from '@qrcode/svg';


const resumeBuilder = () => {
  const [form, setForm] = useState(
    {
      firstName: '', 
      lastName: '', 
      email: '', 
      phone: '', 
      university: '',
      degree: '', 
      company1: '', 
      company2: '', 
      company3: '', 
      title1: '', 
      title2: '', 
      title3: '', 
      jobDescription1: '', 
      jobDescription2: '', 
      jobDescription3: '', 
      skill1: '', 
      skill2: '', 
      skill3: '', 
      portfolio: '', 
      objective: '',
    }
  );

  const handleFormChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
};

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const svgString = qrcodeSVG(form.portfolio || "https://www.github.com", {size: 50})
    console.log(svgString)

    const doc = new jsPDF();
    doc.addSvgAsImage(svgString, 140, 26, 50, 50);
    doc.setFontSize(30);
    doc.setFont('tahoma', 'bold')
    doc.text(`${form.firstName} ${form.lastName}`, 12, 20);
    doc.setFont()
    doc.setFontSize(10);
    doc.text(`${form.address}`, 12, 30, {maxWidth: 50})
    doc.text(`${form.phone}`, 72, 30)
    doc.text(`${form.email}`, 72, 34)
    doc.line(64, 26, 64, 36, 'S')
    doc.setFont('bold')
    doc.setFontSize(18)
    doc.text('Career Objective', 12, 52)
    doc.setFont()
    doc.setFontSize(10);
    doc.text(form.objective, 12, 58, {maxWidth: 110})
    doc.line(12, 92, 120, 92, 'DF')
    doc.line(132, 92, 200, 92, 'DF')
    doc.setFontSize(18)
    doc.text('Work Experience', 12, 112)
    doc.text('Education', 132, 112);
    doc.text('Skills', 132, 182);
    doc.setFontSize(12);
    doc.text(`${form.title1} - ${form.company1}`, 12, 125)
    doc.text(`${form.title2} - ${form.company2}`, 12, 165)
    doc.text(`${form.title3} - ${form.company3}`, 12, 205)
    doc.text(form.university, 132, 125)
    doc.text(`- ${form.skill1}`, 132, 190)
    doc.text(`- ${form.skill2}`, 132, 200)
    doc.text(`- ${form.skill3}`, 132, 210)
    doc.setFontSize(10);
    doc.text(form.jobDescription1, 12, 130, {maxWidth: 108})
    doc.text(form.jobDescription2, 12, 170, {maxWidth: 108})
    doc.text(form.jobDescription3, 12, 210, {maxWidth: 108})
    doc.text(form.degree, 132, 130)

    setTimeout(function() {
      doc.save(`${form.firstName}-${form.lastName}.pdf`);
   }, 1000);
  }

  const formDiv = {
    color: '#00ff00',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  }

  const internalFormDiv = {
    paddingTop: '2rem',
    marginLeft: '2rem',
    marginRight: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  
  const labelDiv = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%'
  }
  
  const wideDiv = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  }
  
  return (
    <>
    <div style={formDiv}>
    <form className='resumeForm' onSubmit={handleFormSubmit}>
      <h3 style={{alignSelf: 'center', marginTop: '2rem'}}>Resume Builder</h3>
      <hr style={{alignSelf: "center", width: '50%'}}/>
      <div style={internalFormDiv}>
        <div style={labelDiv}>
          <label>First Name</label>
          <hr />
          <input type="text" name="firstName" id="firstName" onChange={handleFormChange} placeholder="First Name"/><br />
        </div>

        <div style={labelDiv}>
          <label>Last Name</label>
          <hr />
          <input type="text" name="lastName" id="lastName" onChange={handleFormChange} placeholder="Last Name"/><br />
        </div>

        <div style={labelDiv}>
          <label>Email</label>
          <hr />
          <input type="email" name="email" id="email" onChange={handleFormChange} placeholder="Email"/><br />
        </div>
      </div>

      <div style={internalFormDiv}>
        <div style={labelDiv}>
          <label htmlFor="address">Address</label>
          <hr style={{width: '150%'}}/>
          <input type="text" name="address" id="address" onChange={handleFormChange} style={{width: '150%'}} placeholder="555 Highway Street Road, Coolcity, Coolstate 98765"/><br />
        </div>

        <div style={labelDiv}>
          <label htmlFor="phone">Phone</label>
          <hr />
          <input type="tel" name="phone" id="phone" onChange={handleFormChange} placeholder="(555) 555-555"/><br />
        </div>
      </div>

      <div style={internalFormDiv}>
        <div style={wideDiv}>
          <label htmlFor="university">Education</label>
          <hr />
          <input type="text" name="university" id="university" onChange={handleFormChange} placeholder="University"/><br />
          <input type="text" name="degree" id="degree" onChange={handleFormChange} placeholder="Degree"/><br />
        </div>
      </div>

      <h4 style={{alignSelf: 'center', marginTop: '3rem'}}>Work Experience</h4>
      <hr style={{alignSelf: "center", width: '50%'}}/>

      <div style={internalFormDiv}>

        <div style={labelDiv}>
          <label htmlFor="experience">Current Job</label>
          <hr />
          <input type="text" name="title1" id="title1" onChange={handleFormChange} placeholder="Current Job Title"/><br />
          <input type="text" name="company1" id="company1" onChange={handleFormChange} placeholder="Current Company"/><br />
          <textarea type="text" name="jobDescription1" id="jobDescription1" onChange={handleFormChange} placeholder="Current Job Description"/><br />
        </div>

        <div style={labelDiv}>
          <label htmlFor="experience">Previous Work</label>
          <hr />
          <input type="text" name="title2" id="title2" onChange={handleFormChange} placeholder="Previous Job Title"/><br />
          <input type="text" name="company2" id="company2" onChange={handleFormChange} placeholder="Previous Company"/><br />
          <textarea type="text" name="jobDescription2" id="jobDescription2" onChange={handleFormChange} placeholder="Previous Job Description"/><br />
        </div>

        <div style={labelDiv}>
        <label htmlFor="experience">Previous Work</label>
          <hr />
          <input type="text" name="title3" id="title3" onChange={handleFormChange} placeholder="Previous Job Title"/><br />
          <input type="text" name="company3" id="company3" onChange={handleFormChange} placeholder="Previous Company"/><br />
          <textarea type="text" name="jobDescription3" id="jobDescription3" onChange={handleFormChange} placeholder="Previous Job Description"/><br />
        </div>

      </div>

      <div style={internalFormDiv}>
        <div style={wideDiv}>
          <label htmlFor="skills">Skills</label>
          <hr />
          <input type="text" name="skill1" id="skill1" onChange={handleFormChange} placeholder="Skill"/><br />
          <input type="text" name="skill2" id="skill2" onChange={handleFormChange} placeholder="Skill"/><br />
          <input type="text" name="skill3" id="skill3" onChange={handleFormChange} placeholder="Skill"/><br />
        </div>
      </div>

      <div style={internalFormDiv}>
        <div style={wideDiv}>
          <label htmlFor="portfolio">Portfolio</label>
          <hr />
          <input type="text" name="portfolio" id="portfolio" onChange={handleFormChange} placeholder="Format: https://www.exampleportfolio.com"/><br />
        </div>
      </div>

      <div style={internalFormDiv}>
        <div style={wideDiv}>
          <label htmlFor="objective">Career Objective</label>
          <hr />
          <textarea type="textarea" name="objective" id="objective" onChange={handleFormChange}/><br />
          <input type="submit" value="Generate Resume" style={{margin: '2rem', backgroundColor: '#00ff00'}}/>
        </div>
      </div>
      
    </form>
    </div>
    </>
  )
};
  
export default resumeBuilder;
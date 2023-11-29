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
    doc.text(`${form.title2} - ${form.company2}`, 12, 155)
    doc.text(`${form.title3} - ${form.company3}`, 12, 185)
    doc.text(form.university, 132, 125)
    doc.text(`- ${form.skill1}`, 132, 190)
    doc.text(`- ${form.skill2}`, 132, 200)
    doc.text(`- ${form.skill3}`, 132, 210)
    doc.setFontSize(10);
    doc.text(form.jobDescription1, 12, 130, {maxWidth: 108})
    doc.text(form.jobDescription2, 12, 160, {maxWidth: 108})
    doc.text(form.jobDescription3, 12, 190, {maxWidth: 108})
    doc.text(form.degree, 132, 130)


    
    setTimeout(function() {
      doc.save('resume.pdf');
   }, 1000);
  }

  
  return (
    <>
    <form className='resumeForm' onSubmit={handleFormSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" id="firstName" onChange={handleFormChange} /><br />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" id="lastName" onChange={handleFormChange} /><br />
      <label htmlFor="address">Address:</label>
      <input type="text" name="address" id="address" onChange={handleFormChange} /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" onChange={handleFormChange} /><br />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" name="phone" id="phone" onChange={handleFormChange} placeholder="Format: (555) 555-555"/><br />
      <label htmlFor="university">Education:</label>
      <input type="text" name="university" id="university" onChange={handleFormChange} placeholder="University"/><br />
      <input type="text" name="degree" id="degree" onChange={handleFormChange} placeholder="Degree"/><br />
      <label htmlFor="experience">Work Experience:</label>
      <input type="text" name="title1" id="title1" onChange={handleFormChange} placeholder="Current Job Title"/><br />
      <input type="text" name="company1" id="company1" onChange={handleFormChange} placeholder="Current Company"/><br />
      <input type="text" name="jobDescription1" id="jobDescription1" onChange={handleFormChange} placeholder="Current Job Description"/><br />
      <label htmlFor="experience">Previous:</label>
      <input type="text" name="title2" id="title2" onChange={handleFormChange} placeholder="Previous Job Title"/><br />
      <input type="text" name="company2" id="company2" onChange={handleFormChange} placeholder="Previous Company"/><br />
      <input type="text" name="jobDescription2" id="jobDescription2" onChange={handleFormChange} placeholder="Previous Job Description"/><br />
      <input type="text" name="title3" id="title3" onChange={handleFormChange} placeholder="Previous Job Title"/><br />
      <input type="text" name="company3" id="company3" onChange={handleFormChange} placeholder="Previous Company"/><br />
      <input type="text" name="jobDescription3" id="jobDescription3" onChange={handleFormChange} placeholder="Previous Job Description"/><br />
      <label htmlFor="skills">Skills:</label>
      <input type="text" name="skill1" id="skill1" onChange={handleFormChange} placeholder="Skill"/><br />
      <input type="text" name="skill2" id="skill2" onChange={handleFormChange} placeholder="Skill"/><br />
      <input type="text" name="skill3" id="skill3" onChange={handleFormChange} placeholder="Skill"/><br />
      <label htmlFor="portfolio">Portfolio:</label>
      <input type="text" name="portfolio" id="portfolio" onChange={handleFormChange} placeholder="Format: https://www.exampleportfolio.com"/><br />
      <label htmlFor="objective">Career Objective:</label>
      <input type="textarea" name="objective" id="objective" onChange={handleFormChange} style={{height: '100px', paddingBottom: '55px', paddingLeft: '10px'}}/><br />
      <input type="submit" value="Generate Resume"/>
    </form>
    </>
  )
};
  
export default resumeBuilder;
import React, { useState } from "react";
import { jsPDF } from 'jspdf';
import qrcodeSVG from '@qrcode/svg';


const resumeBuilder = () => {
  const [form, setForm] = useState({firstName: '', lastName: '', email: '', phone: '', university: '', experience: '', skills: '', portfolio: '', objective: ''})

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
    doc.setFontSize(10);



    
    setTimeout(function() {
      doc.save('resume.pdf');
   }, 2000);
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
      <label htmlFor="university">University:</label>
      <input type="text" name="university" id="university" onChange={handleFormChange} /><br />
      <label htmlFor="experience">Work Experience:</label>
      <input type="text" name="experience" id="experience" onChange={handleFormChange} /><br />
      <label htmlFor="skills">Skills:</label>
      <input type="text" name="skills" id="skills" onChange={handleFormChange} /><br />
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
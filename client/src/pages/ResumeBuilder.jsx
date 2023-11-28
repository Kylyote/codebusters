import React, { useState } from "react";
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode-svg';

const resumeBuilder = () => {
  const [form, setForm] = useState({firstName: '', lastName: '', email: '', phone: '', university: '', experience: '', skills: '', portfolio: ''})

  const handleFormChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
};

  const handleFormSubmit = (e) => {
    const qrcode = new QRCode({
      content: "https://youtube.com",
      width: 50,
      height: 50,
      color: '#000000',
      background: '#ffffff',
      ecl: 'M'
    });
    const svg = qrcode.svg()

    e.preventDefault();
    const doc = new jsPDF();
    doc.circle(25, 25, 15, 'S')
    doc.addSvgAsImage(svg, 25, 25, 100, 100)
    doc.setFontSize(22);
    doc.text('Resume', 105, 30, {align: 'center'});
    doc.setFontSize(12);
    doc.text('Page ' + doc.internal.getNumberOfPages(), 105, 280, {align: 'center'});

    

    doc.setFontSize(14);
    doc.text(form.firstName + ' ' + form.lastName, 10, 40);
    doc.text(form.email, 10, 50);
    doc.text(form.phone, 10, 60);
    doc.text(form.university, 10, 70);

    doc.setFontSize(12);
    doc.text('Work Experience:', 10, 90);
    doc.text(form.experience, 10, 100);
    doc.text('Skills:', 10, 120);
    doc.text(form.skills, 10, 130);
    setTimeout(function() {
      doc.save('resume.pdf');
   }, 1500);
  }

  
  return (
    <>
    <form className='resumeForm' onSubmit={handleFormSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" id="firstName" onChange={handleFormChange} /><br />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" id="lastName" onChange={handleFormChange} /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" onChange={handleFormChange} /><br />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" name="phone" id="phone" onChange={handleFormChange} /><br />
      <label htmlFor="university">University:</label>
      <input type="text" name="university" id="university" onChange={handleFormChange} /><br />
      <label htmlFor="experience">Work Experience:</label>
      <input type="text" name="experience" id="experience" onChange={handleFormChange} /><br />
      <label htmlFor="skills">Skills:</label>
      <input type="text" name="skills" id="skills" onChange={handleFormChange} /><br />
      <label htmlFor="portfolio">Portfolio:</label>
      <input type="text" name="portfolio" id="portfolio" onChange={handleFormChange} /><br />
      <input type="submit" value="Generate Resume"/>
    </form>
    </>
  )
};
  
export default resumeBuilder;
import binaryGif from '/images/binary.gif';

const colors = ['gray', 'orange', 'lightblue', 'lightyellow', 'lightgreen'];

function Card({ title, content, index }) {
 return (
   <div style={{ backgroundColor: colors[index % colors.length], border:"solid", height: "100%" }}>
     <h2 style={{textAlign: 'center'}}><strong>{title}</strong></h2>
     <p style={{ marginLeft: '30px',fontStyle: "italic" }}>{content}</p>
   </div>
 );
}

const About = () => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '20px', 
      backgroundImage: `url(${binaryGif})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "100vh",
    }}>
      <Card 
        title="Who We Are" 
        content="Code Buster is not just a web development platform, it's a comprehensive platform that caters to all your web development needs, providing a one-stop solution for everything you need in the digital realm.

        We offer creative power that goes beyond templates. We design, and we generate the code for everything from fully custom layouts to complex animations. Our platform is designed to help you scale your site with your business, providing tools that optimize your SEO and improve discoverability with fine-tuned controls, high-performance hosting, and flexible content management tools 1.
        
        We understand that web development is not just about building websites, but also about providing a seamless user experience. That's why we offer advanced collaboration features designed to help large teams collaborate and build and launch sites quickly and safely 1.
        
        Moreover, we provide dedicated, tailored support. From implementation support to in-the-moment troubleshooting, we’re here to offer personalized help. We also prioritize security and compliance, launching with peace of mind thanks to our robust security and compliance features and reliable hosting infrastructure 1.
        
        We believe in the power of community and we're always looking for ways to help our clients succeed. That's why we offer resources like a marketplace, educational videos, and customer stories to help you find what you need to succeed with us 1.
        
        We are proud to be trusted by leading organizations and have a track record of delivering high-quality web development services. We are committed to helping our clients succeed and grow their businesses in the digital realm 1.
        
        In conclusion, Code Buster is not just a web development company, but a comprehensive platform that caters to all your web development needs, providing a one-stop solution for everything you need in the digital realm. We are committed to delivering high-quality web development services and helping our clients succeed in the digital realm."
        index={0}
      />
      <Card 
        title="Hardware Shopping" 
        content="We understand that not everyone is a tech expert, and sometimes, you might need a little help when it comes to hardware shopping. That's where we come in. With Code Buster, you can easily browse through our extensive selection of hardware and have everything you need delivered right to your doorstep. We offer a wide range of products, from laptops and desktops to peripherals and more, all at competitive prices."
        index={1}
      />
      <Card 
        title="Learning and Improvement" 
        content="We believe in continuous learning and improvement. That's why we offer a range of resources for those looking to brush up on their skills. Our tutors are some of the best in the field, offering personalized lessons that cater to your specific needs and goals. Whether you're a beginner looking to start your journey in web development or an experienced professional looking to stay updated with the latest trends and technologies, we've got you covered."
        index={2}
      />
      <Card 
        title="Professional Web Development" 
        content="We take pride in our team of professionals who have years of experience in web development. Our team is dedicated to delivering high-quality websites that not only look great but also function flawlessly. We understand that your website is a reflection of your brand, and we work tirelessly to ensure that it is as impressive as you are."
        index={3}
      />
      <Card 
        title="Story Telling" 
        content="We believe in storytelling. We aim to tell a unique story that sets us apart from the crowd. Our story is about helping you achieve your goals in the digital realm, whether it's learning a new skill, finding the perfect hardware, or building a professional website 8. In conclusion, Code Buster is more than just a web development company. We're a community of learners, professionals, and enthusiasts who are passionate about the digital world. We're here to help you navigate the digital landscape, improve your skills, and achieve your goals."
        index={4}
      />
    </div>
  );
 }
 
 
 
 export default About;
 
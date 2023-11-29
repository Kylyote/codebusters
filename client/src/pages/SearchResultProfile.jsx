/* importing necessary libraries and components */
import { useQuery, useMutation} from '@apollo/client';
import { QUERY_USER_BY_ID } from '../utils/queries';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReviewMain from '../components/ReviewModal';
import Card from 'react-bootstrap/Card';

/* importing avatar images */
import avatar1 from '../assets/img/avatar_png_files/avatar_1.png';
import avatar2 from '../assets/img/avatar_png_files/avatar_2.png';
import avatar3 from '../assets/img/avatar_png_files/avatar_3.png';
import avatar4 from '../assets/img/avatar_png_files/avatar_4.png';
import avatar5 from '../assets/img/avatar_png_files/avatar_5.png';
import avatar6 from '../assets/img/avatar_png_files/avatar_6.png';
import avatar7 from '../assets/img/avatar_png_files/avatar_7.png';
import avatar8 from '../assets/img/avatar_png_files/avatar_8.png';
import avatar9 from '../assets/img/avatar_png_files/avatar_9.png';
import avatar10 from '../assets/img/avatar_png_files/avatar_10.png';
import avatar11 from '../assets/img/avatar_png_files/avatar_11.png';
import avatar12 from '../assets/img/avatar_png_files/avatar_12.png';
import avatar13 from '../assets/img/avatar_png_files/avatar_13.png';
import avatar14 from '../assets/img/avatar_png_files/avatar_14.png';

/* array of avatar images */
const avatars = [
 avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14
 ];

 const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

/* Socket.io */
import {socket} from '../socket'
import {ConnectionState} from '../components/ConnectionState'
import {ConnectionManager} from '../components/ConnectionManager'
import {Events} from '../components/Events'
import {MyForm} from '../components/MyForm'
/* End Socket.IO */

/* main component */
const SearchResultProfile = () => {
    const {id} = useParams();
    console.log(id, "searchResultProfile line 52");
    const { loading, error, data } = useQuery(QUERY_USER_BY_ID, {
        variables: { id: id },
       });
       
       /* extracting user data from query */
         const user = data?.user;
         

       /* Socket.io state variables */
 const [isConnected, setIsConnected] = useState(socket.connected)
 const [fooEvents, setFooEvents] = useState([])
 /* socket io */ 

 /* extracting user data from query */
        const firstName = user?.firstName;
        const lastName = user?.lastName;
        const username = user?.username;
        const languages = user?.languages;
        const email = user?.email;
        const skills = user?.skills;
        const avgScore = user?.avgScore;
        const subscription = user?.subscription;
        console.log(subscription)
      
        
/* rendering the component */
    return(
      <div className="container row">
     <div className="col-2 " style={{
   backgroundColor: subscription === "Gold" ? "goldenrod" : "lightgreen",
 }}>

        <br></br>
        <img
          src={randomAvatar}
          alt="Profile Picture"
          className="profile-pic"
          style={{ marginLeft: "1px " }}
        />
        <p style={{marginLeft:'15px', fontSize:"2rem"}}>Rating: {avgScore}/5</p>
        {/* <h2 style={{ marginLeft: "15px", fontSize:"2rem" }}>
          Name:{" "}
          {firstName} {lastName}
        </h2> */}
        <br></br>
        <p style={{ marginLeft: "15px",fontSize:"1.5rem" }}>
          <strong>USERNAME: </strong>
          {`${username}`}
        </p>
        <h3 style={{textDecoration: 'underline'}}>Languages</h3>
        {languages &&
          languages.map((language, index) => (
            <p style={{ marginLeft: "15px" }} key={index}>
              <strong>{language.language}</strong> - {language.skill}
            </p>
          ))}
          
    <div>
    {/* <ChatModal /> */}
      <button style={{marginLeft:'15px'}} onClick={() => {
        window.location.href = `mailto:${email}?subject=CodeBuster%20Support&body=Hello%20${firstName} ${lastName}%20I%20would%20like%20to%20discuss%20using%20you%20for%20services%20I%20need.`;
        setShowModal(!showModal);
        console.log(showModal);
        }}>
      Contact User
       
      </button>
     
    {/*button to add a review*/}
    <div style={{marginLeft:'15px'}}>
      <br></br>
      <ReviewMain />
    </div>
    </div>
    
</div>
    <div className="col-10">
        <br></br>

        <div className="container row">
          <div
            className="col-3"
            style={{
              minHeight: "450px",
              minWidth: "350px",
              margin: "1px 25px 45px 5px",
              border: "35px 35px 35px 35px",
              padding: "1px 1px 1px 1px",
            }}
          >
          <a className="glow-on-hover" href="https://codemantic-e7e316dea174.herokuapp.com/" target="_blank" style={{textAlign: "center", fontSize:"2rem" }}> CodeMantic</a>
         
 <a href="https://www.google.com" target="_blank">
   <iframe
     src="https://codemantic-e7e316dea174.herokuapp.com/"
     height="100%"
     width="100%"
     title="Project "
   ></iframe>
 </a>

          </div>
          <div
             className="col-3"
             style={{
               minHeight: "450px",
               minWidth: "350px",
               margin: "1px 25px 45px 5px",
               border: "35px 35px 35px 35px",
               padding: "1px 1px 1px 1px",
             }}
          >
            <a className="glow-on-hover" href="https://luis00809.github.io/Group-3-project/" target="_blank" style={{textAlign: "center", fontSize:"2rem" }}>
              Vidya
            </a>
            
            <iframe
              src="https://luis00809.github.io/Group-3-project/"
              height="100%"
              width="100%"
              title="Project "
            ></iframe>
        
          </div>
        
          <div
              className="col-3"
              style={{
                minHeight: "450px",
                minWidth: "350px",
                margin: "1px 25px 35px 5px",
                border: "35px 35px 35px 35px",
                padding: "1px 1px 1px 1px",
              }}
          >
            <a className="glow-on-hover" href="https://fitfolio-acfec075c4c6.herokuapp.com/login" target="_blank" style={{textAlign: "center", fontSize:"2rem" }}>
              Fitfolio
            </a>
           
            <iframe
              src="https://fitfolio-acfec075c4c6.herokuapp.com/login"
              height="100%"
              width="100%"
              title="Project "
            ></iframe>
            
          </div>

          <div
             className="col-3"
             style={{
               minHeight: "450px",
               minWidth: "350px",
               margin: "1px 25px 35px 5px",
               border: "35px 35px 35px 35px",
               padding: "1px 1px 1px 1px",
             }}
          >
            <a className="glow-on-hover" href="https://briimcfly.github.io/socialite/" target="_blank" style={{textAlign: "center", fontSize:"2rem" }}>
              Socialit
            </a>
           
            <iframe
              src="https://briimcfly.github.io/socialite/"
              height="100%"
              width="100%"
              title="Project "
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
     
    

  
  

        
        
    )
 
}

export default SearchResultProfile;
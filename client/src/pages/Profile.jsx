import profileImage from "../assets/img/Profile.jpeg";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";
import { useParams } from "react-router-dom";
import avatar1 from "../assets/img/avatar_png_files/avatar_1.png";
import avatar2 from "../assets/img/avatar_png_files/avatar_2.png";
import avatar3 from "../assets/img/avatar_png_files/avatar_3.png";
import avatar4 from "../assets/img/avatar_png_files/avatar_4.png";
import avatar5 from "../assets/img/avatar_png_files/avatar_5.png";
import avatar6 from "../assets/img/avatar_png_files/avatar_6.png";
import avatar7 from "../assets/img/avatar_png_files/avatar_7.png";
import avatar8 from "../assets/img/avatar_png_files/avatar_8.png";
import avatar9 from "../assets/img/avatar_png_files/avatar_9.png";
import avatar10 from "../assets/img/avatar_png_files/avatar_10.png";
import avatar11 from "../assets/img/avatar_png_files/avatar_11.png";
import avatar12 from "../assets/img/avatar_png_files/avatar_12.png";
import avatar13 from "../assets/img/avatar_png_files/avatar_13.png";
import avatar14 from "../assets/img/avatar_png_files/avatar_14.png";

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
  avatar14,
];

const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

/* Socket.io */
import { useState, useEffect } from "react";
// import { socket } from "../socket";
// import { ConnectionState } from "../components/ConnectionState";
// import { ConnectionManager } from "../components/ConnectionManager";
// import { Events } from "../components/Events";
// import { MyForm } from "../components/MyForm";
/* End Socket.IO */

const Profile = () => {
  const { id } = useParams();

  /* Socket.io state variables */
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [fooEvents, setFooEvents] = useState([]);

  const [updateUser] = useMutation(UPDATE_USER);
  
  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //   }
    
  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }
    
  //   function onFooEvent(value) {
  //     setFooEvents((previous) => [...previous, value]);
  //   }
    
  //   /* socket io */
  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);
  //   socket.on("foo", onFooEvent);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //     socket.off("foo", onFooEvent);
  //   };
  // }, []);
  /* end socket io */

    const { loading, error, data } = useQuery(QUERY_USER, {
      variables: {id}});
   

    if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;
console.log(data);

 const firstName = data.user.firstName;
    const lastName = data.user.lastName;
    const username = data.user.username;
    const languages = data.user.languages;
    const email = data.user.email;
    const skills = data.user.skills;
    const avgScore = data.user.avgScore;


  /* function for handling page editing */

  function Editable({ text, type, onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);

    const handleChange = (e) => {
      setValue(e.target.value);
      onChange(e.target.value);
    };

    const handleEdit = () => {
      setIsEditing(true);
    };

    const { loading, error, data } = useQuery(QUERY_USER);

    // ...

    function handleSave() {
      setIsEditing(false);
      updateUser({
        variables: {
          id: data.user._id,
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
      });
    }

    return (
      <span onClick={handleEdit}>
        {isEditing ? (
          <input
            type={type}
            value={value}
            onChange={handleChange}
            onBlur={handleSave}
          />
        ) : (
          <span>{value}</span>
        )}
      </span>
    );
  }

  /* end function for handling page editing */

  return (
    <div className="container row">
      <div className="col-2">
        <br></br>
        <img
          src={randomAvatar}
          alt="Profile Picture"
          className="profile-pic"
          style={{ marginLeft: "1px " }}
        />
            <p style={{marginLeft:'15px', fontSize:"2rem"}}>Rating: {avgScore}/5</p>

        <h2 style={{ marginLeft: "15px", fontSize:"2rem" }}>
            Name:{" "}
            {firstName} {lastName}
            </h2>
          <br></br>
        <p style={{ marginLeft: "15px",fontSize:"1.5rem" }}>
          <strong>USERNAME: </strong>
          {`${username}`}</p>

          {languages &&
          languages.map((language, index) => (
            <p style={{ marginLeft: "15px" }} key={index}>
              <strong>{language.language}</strong> - {language.skill}
            </p>
          ))}

      </div>
      <div className="col-10">
        <br></br>

        <div className="container row">
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
          <a href="https://codemantic-e7e316dea174.herokuapp.com/" target="_blank" style={{textAlign: "center" }}> Natural Spaces</a>
         
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
               margin: "1px 25px 35px 5px",
               border: "35px 35px 35px 35px",
               padding: "1px 1px 1px 1px",
             }}
          >
            <a href="https://luis00809.github.io/Group-3-project/" target="_blank">
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
            <a href="https://fitfolio-acfec075c4c6.herokuapp.com/login" target="_blank">
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
            <a href="https://briimcfly.github.io/socialite/" target="_blank">
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
  );
  console.log(data);
};

export default Profile;

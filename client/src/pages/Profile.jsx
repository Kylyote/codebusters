import profileImage from '../assets/img/Profile.jpeg'
import { useQuery } from '@apollo/client';
import { GET_CHAT } from '../utils/queries';
import {ADD_CHAT_MESSAGE} from '../utils/mutations'
import {useMutation} from '@apollo/client'
import {UPDATE_USER} from '../utils/mutations'
import {QUERY_USER} from '../utils/queries'
import { useParams } from 'react-router-dom';
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
import ChatModal from '../components/ChatModal';

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
import {useState, useEffect} from 'react'
import {socket} from '../socket'
import {ConnectionState} from '../components/ConnectionState'
import {ConnectionManager} from '../components/ConnectionManager'
import {Events} from '../components/Events'
import {MyForm} from '../components/MyForm'
import io from 'socket.io-client'
/* End Socket.IO */
const onConnect = () => {
  console.log('connected');
};
const onDisconnect = () => {
  console.log('disconnected');
};
const onFooEvent = (data) => {
  console.log('foo', data);
}

const Profile = () => {
  
  const {id} = useParams();
  
    /* Socket.io state variables */
const [isConnected, setIsConnected] = useState(socket.connected)
const [fooEvents, setFooEvents] = useState([])
const [room, setRoom] = useState(id);
const [showModal, setShowModal] = useState(false);
{showModal && <ChatModal showModal={showModal} />}


/* socket io */
const [updateUser] = useMutation(UPDATE_USER);

const joinRoom = () => {
  if (room !== '') {
    socket.emit('join_room', room);
  }
};

const sendMessage = () => {
  socket.emit('send_message', message, room);
};

    useEffect(() => {
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      socket.on('foo', onFooEvent);

      socket.on('receive_message', (data) => {
        setMessageReceived(data.message);
      });
     
      return () => {
        socket.off('connect');
        socket.off('receive_message');
        socket.off('disconnect');
        socket.off('foo');
      };
     }, [socket]);

     
  

    /* end socket io */

    const { loading, error, data } = useQuery(QUERY_USER, {
      variables: {id}});
   

    if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

 const firstName = data.user.firstName;
    const lastName = data.user.lastName;
    const username = data.user.username;
    const languages = data.user.languages;
    const email = data.user.email;
    const skills = data.user.skills;


    /* function for handling page editing */
    
    function Editable({ text, type, onChange }) {
      const [isEditing, setIsEditing] = useState(false);
      const [value, setValue] = useState(text);
      
      const handleChange = e => {
        setValue(e.target.value);
        onChange(e.target.value);
      };
      
      const handleEdit = () => {
        setIsEditing(true);
      };
     
      const handleSave = () => {
        setIsEditing(false);
        updateUser({ variables: { id: data.user._id, username: username, firstName: firstName, lastName: lastName, email: email} });
      };
     
      return (
        <span onClick={handleEdit}>
          {isEditing ? (
            <input type={type} value={value} onChange={handleChange} onBlur={handleSave} />
          ) : (
            <span>{value}</span>
          )}
        </span>
      );
     }
     
     

    /* end function for handling page editing */

   

    return (
      
        
        <div>
          {showModal && <ChatModal showModal={showModal} />}
            <br></br>
            <img src={randomAvatar}alt="Profile Picture" className="profile-pic" style={{marginLeft:'15px'}} />
            <h2 style={{marginLeft:'15px'}}>Name: <Editable text={`${firstName} ${lastName}`} type="text" onChange={(newValue) => { console.log(newValue); }} /> </h2>

            <p style={{marginLeft:'15px'}}><strong>Username:</strong><Editable text={`${username}`} type="text" onChange={(newValue) => { console.log(newValue); }} /></p>
            {/* <p style={{marginLeft:'15px'}}><strong>Email: </strong><Editable text={`${email}`} type="text" onChange={(newValue) => { console.log(newValue); }} /></p> */}
            {/* <p style={{marginLeft:'15px'}}><strong>Skill: <Editable text={`${languages}`} type="text" onChange={(newValue) => { console.log(newValue); }} /></strong> </p> */}
            {languages && languages.map((language, index) => (
  <p style={{marginLeft:'15px'}} key={index}><strong>{language.language}</strong> - {language.skill}</p>
))}
            <div className="projects" style={{marginLeft:'15px'}}>
                <a href="https://github.com/user/project1">Project 1</a>
                <a href="https://github.com/user/project2">Project 2</a>
                <a href="https://github.com/user/project3">Project 3</a>
            </div>
         
<div>
{/* <ChatModal /> */}
<button style={{marginLeft:'15px'}} onClick={() => {
 window.location.href = `mailto:${email}?subject=CodeBuster%20Support&body=Hello%20${firstName} ${lastName}%20I%20would%20like%20to%20discuss%20using%20you%20for%20services%20I%20need.`;
 setShowModal(!showModal);
 console.log(showModal);
}}>
 Contact User
</button>

</div>
        </div>
        
        
    )
 }
 
 export default Profile





import profileImage from '../assets/img/Profile.jpeg'
import { useQuery } from '@apollo/client';
import {QUERY_USER} from '../utils/queries'
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
/* End Socket.IO */


const Profile = () => {
    /* Socket.io state variables */
const [isConnected, setIsConnected] = useState(socket.connected)
const [fooEvents, setFooEvents] = useState([])

/* socket io */
useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
   
    function onDisconnect() {
      setIsConnected(false);
    }
   
    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }
   
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);
   
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
   }, []);
    /* end socket io */


    const { loading, error, data } = useQuery(QUERY_USER);
    console.log(data)

    if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

 const firstName = data.user.firstName;
    const lastName = data.user.lastName;
    const username = data.user.username;
    const languages = data.user.languages;
    const email = data.user.email;
    const skills = data.user.skills;


    return (
        
        <div>
            <br></br>
            <img src={randomAvatar}alt="Profile Picture" className="profile-pic" />
            <h2>Name: {firstName}{lastName}</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email: </strong>{email}</p>
            <p>Years of Experience: 5</p>
            <p>Languages: {languages}</p>
            <div className="projects">
                <a href="https://github.com/user/project1">Project 1</a>
                <a href="https://github.com/user/project2">Project 2</a>
                <a href="https://github.com/user/project3">Project 3</a>
            </div>
            <div style={{ position: 'absolute', right: '0', border: '2px solid black', marginRight: '20px', marginBottom: '10px'}}>
 <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
   <h1>Messenger</h1>
 </div>
 <ConnectionState isConnected={ isConnected } />
 <Events events={ fooEvents } />
 <ConnectionManager />
 <MyForm />
</div>
        </div>
        
        
    )
 }
 
 export default Profile
 
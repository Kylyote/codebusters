import { useQuery } from '@apollo/client';
import { QUERY_USER_BY_ID } from '../utils/queries';
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



const SearchResultProfile = () => {
    const {id} = useParams();
    console.log(id, "searchResultProfile line 52");
    const { loading, error, data } = useQuery(QUERY_USER_BY_ID, {
        variables: { id: id },
       });
       
    //    console.log(data, "searchResultProfile line 57");

        // if (loading) {
        //     return <p>Loading...</p>;
        //    }
        
        //    if (error) {
        //     return <p>Error! {error.message}</p>;
        //    }

        //    if (!data) {
        //     return <p>No user found</p>;
        //    }
             

         const user = data?.user;
         

        console.log(user, "searchResultProfile line 53");

       /* Socket.io state variables */
 const [isConnected, setIsConnected] = useState(socket.connected)
 const [fooEvents, setFooEvents] = useState([])
 /* socket io */ 

 
        const firstName = user?.firstName;
        const lastName = user?.lastName;
        const username = user?.username;
        const languages = user?.languages;
        const email = user?.email;
        const skills = user?.skills;
        

    return(

         
        <div>
            <br></br>
            <img src={randomAvatar}alt="Profile Picture" className="profile-pic" style={{marginLeft:'15px'}} />
            <h2 style={{marginLeft:'15px'}}>{`Name: ${firstName} ${lastName}`}</h2>

            <p style={{marginLeft:'15px'}}><strong>Username:</strong> {username} </p>
            <p style={{marginLeft:'15px'}}><strong>Email: </strong> {email} </p>
            {languages && languages.map((language, index) => (
  <p key={index}><strong>{language.language}</strong> - {language.skill}</p>
))}

            <div className="projects" style={{marginLeft:'15px'}}>
                <a href="https://github.com/user/project1">Project 1</a>
                <a href="https://github.com/user/project2">Project 2</a>
                <a href="https://github.com/user/project3">Project 3</a>
            </div>
            <div style={{ position: 'absolute', right: '0', border: '2px solid black', marginRight: '20px', marginBottom: '10px', width: '400px', height: '400px'}}>
 <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
   <h1>Messenger <ConnectionManager /></h1>
 </div>
 <ConnectionState isConnected={ isConnected } />
 <Events events={ fooEvents } />
 <MyForm />
</div>
        </div>
        
        
    )



    
}

export default SearchResultProfile;
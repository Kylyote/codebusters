import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';
import Card from 'react-bootstrap/Card';
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

// import profileImage from '../assets/img/avatar_png_files/avatar_1.png'
import {Container, Row, Col} from 'react-bootstrap';

const SearchResults = () => {
 const { loading, error, data } = useQuery(GET_ALL_USERS);
 
 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

// Sort the users based on their subscription level
const sortedUsers = [...data.users].sort((a, b) => {
  if (a.subscription === 'gold' && b.subscription !== 'gold') {
    return -1;
  }
  if (a.subscription !== 'gold' && b.subscription === 'gold') {
    return 1;
  }
  if (a.subscription === 'free' && b.subscription !== 'free') {
    return -1;
  }
  if (a.subscription !== 'free' && b.subscription === 'free') {
    return 1;
  }
  if (a.subscription === null && b.subscription !== null) {
    return -1;
  }
  if (a.subscription !== null && b.subscription === null) {
    return 1;
  }
  return 0;
 });
 
 console.log(data.users)
 
 return (
   <Container>
     <h1>Search Results Page</h1>
     <Row>
     {sortedUsers.map((user) => {
         const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
         return (
           <Col sm={4} key={user._id}>
             <Card style={{ width: '18rem', backgroundColor: 'lightgreen' }}>
               <Card.Img variant="top" src={randomAvatar} />

             <Card.Body>
               <Card.Title><strong>Name: </strong>{user.firstName} {user.lastName}</Card.Title>
               <Card.Text><strong>Email: </strong><i>{user.email}</i></Card.Text>
               <Card.Text><strong>Username: </strong><i>{user.username}</i></Card.Text>
               <Card.Text><strong>Subscription Level: </strong>{user.subscription}</Card.Text>
               <Card.Text>
                <strong>Languages: </strong>
                <br></br>
                {user.languages && user.languages.map((language, index) => (
                  <span key={index}>
                    <i>{language.language}</i>
                    <strong> - Rank: </strong>
                    {language.skill}
                    <br></br>
                  </span>
                ))}
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
         );
                })}
     </Row>
   </Container>
  );
};
 
export default SearchResults;

 


import React from 'react';
import {useLocation} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';
import {QUERY_USER} from '../utils/queries';
import { Link } from 'react-router-dom';
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

//  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

// import profileImage from '../assets/img/avatar_png_files/avatar_1.png'
import {Container, Row, Col} from 'react-bootstrap';

const SearchResults = () => {
  
  /* retrieve search state from Search.jsx */
  const location = useLocation();
  const {services, language, skill} = location.state;
  /* end search state retrieval */
  console.log(services, language, skill, "search state SearchResults.jsx line 51")
 const { loading, error, data } = useQuery(GET_ALL_USERS,
   {
   variables: { service: services, language: language, skill: skill },
 })

console.log(data, "data SearchResults.jsx line 57");

 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;
 
 /* 
  * Sort users by subscription level
  * Gold -> Free -> null
  * When each they are sorted by user rating. Higher is better.
  */
 const goldUsers = data.users.filter(user => user.subscription === 'Gold').sort((a, b) => b.avgScore - a.avgScore);
 const freeUsers = data.users.filter(user => user.subscription === 'Free').sort((a, b) => b.avgScore - a.avgScore);
 const nullUsers = data.users.filter(user => user.subscription === null).sort((a, b) => b.avgScore - a.avgScore);

 const sortedUsers = [...goldUsers, ...freeUsers, ...nullUsers];
console.log(sortedUsers, " Sorted Users SearchResults.jsx line 72")
/* filter users based on search state  this filtering logic will have to be evaluated futher to return correctly from properies of user*/
const filteredUsers = sortedUsers.filter(user =>
  user.services.some(service => service.service === services) &&
  user.services.some(service => service.skill === skill) &&
  user.languages.some(lang => Array.isArray(language) ? language.includes(lang.language) : lang.language === language)
  );
 
 /* end filter users based on search state */
 
console.log(filteredUsers, "filtered users SearchResults.jsx line 82");

return (
  <Container>
   <h1 style={{textAlign: 'center'}}>Search Results:</h1>
   <Row>
    {
  filteredUsers.length > 0 ? (
   filteredUsers.map((user) => {
     const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
     return (
       <Col sm={4} key={user._id}>
         <Card className={`glow-on-hover ${user.subscription === 'Gold' ? 'gold-card' : 'lightgreen-card'}`} style={{ width: '18rem'}}>
           <Link to={`/profile/${user._id}`}>
             <Card.Img variant="top" src={randomAvatar} />
           </Link>
           <Card.Body>
             <Card.Title><strong>Name: </strong>{user.firstName} {user.lastName}</Card.Title>
             <Card.Text><strong>Email: </strong><i>{user.email}</i></Card.Text>
             <Card.Text><strong>Username: </strong><i>{user.username}</i></Card.Text>
             <Card.Text><strong>Subscription Level: </strong>{user.subscription}</Card.Text>
             <Card.Text><strong>User Rating: </strong>{user.avgScore}/5</Card.Text>
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
         <br></br>
       </Col>
     );
   })
  ) : (
   <>
    <p style={{color: 'red',fontSize: '30px'}}>No users available that match your requests. Here are some users outside of your search parameters:</p>

     {sortedUsers.map((user) => {
       const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
       return (
         <Col sm={4} key={user._id}>
           <Card className={user.subscription === 'Gold' ? 'gold-card' : 'lightgreen-card'} style={{ width: '18rem'}}>
             <Link to={`/profile/${user._id}`}>
               <Card.Img variant="top" src={randomAvatar} />
             </Link>
             <Card.Body>
               <Card.Title><strong>Name: </strong>{user.firstName} {user.lastName}</Card.Title>
               <Card.Text><strong>Email: </strong><i>{user.email}</i></Card.Text>
               <Card.Text><strong>Username: </strong><i>{user.username}</i></Card.Text>
               <Card.Text><strong>Subscription Level: </strong>{user.subscription}</Card.Text>
               <Card.Text><strong>User Rating: </strong>{user.avgScore}/5</Card.Text>
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
   </>
  )
 }
 
   </Row>
  
  </Container>
  
 );
}
 
export default SearchResults;

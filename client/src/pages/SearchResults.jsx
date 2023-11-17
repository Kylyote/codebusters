import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';
import Card from 'react-bootstrap/Card';
import profileImage from '../assets/img/Profile.jpeg'
import {Container, Row, Col} from 'react-bootstrap';

const SearchResults = () => {
 const { loading, error, data } = useQuery(GET_ALL_USERS);
 
 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

 console.log(data.users)
 
 return (
   <Container>
     <h1>Search Results Page</h1>
     <Row>
       {data.users.map((user) => (
         <Col sm={4} key={user._id}>
           <Card style={{ width: '18rem', backgroundColor: 'lightgreen' }}>
             <Card.Img variant="top" src={profileImage} />
             <Card.Body>
               <Card.Title><strong>Name: </strong>{user.firstName} {user.lastName}</Card.Title>
               <Card.Text><strong>Email: </strong><i>{user.email}</i></Card.Text>
               <Card.Text><strong>Username: </strong><i>{user.username}</i></Card.Text>
               <Card.Text><strong>Subscription Level: </strong>{user.subscription}</Card.Text>
               <Card.Text>
                <strong>Languages: </strong>
                {user.languages && user.languages.map((language, index) => (
                  <span key={index}>
                    <i>{language.language}</i>
                    <strong> - Skill: </strong>
                    {language.skill}
                  </span>
                ))}
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
       ))}
     </Row>
   </Container>
  );
};
 
export default SearchResults;

 


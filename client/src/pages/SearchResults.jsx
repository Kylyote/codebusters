import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';


const SearchResults = () => {
 const { loading, error, data } = useQuery(GET_ALL_USERS);

 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

 return (
   <div className="container">
     <h1>Search Results Page</h1>
     {data.users.map((user) => (
       <div className="card" key={user._id}>
         <div className="card-body">
           <h5 className="card-title">{user.firstName} {user.lastName}</h5>
           <p className="card-text">{user.email}</p>
           {/* Display other user details here */}
         </div>
       </div>
     ))}
   </div>
 );
};

export default SearchResults;


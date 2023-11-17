import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries';

const SearchResults = () => {
 const { loading, error, data } = useQuery(GET_ALL_USERS);

 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

 return (
   <div>
     <p>Search Results Page</p>
     {data.users.map((user) => (
       <div key={user._id}>
         <p>{user.firstName} {user.lastName}</p>
         <p>{user.email}</p>
         {/* Display other user details here */}
       </div>
     ))}
   </div>
 );
};

export default SearchResults;

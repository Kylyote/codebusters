import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';



/* Socket.IO */

/* Socket.io  imports */
import {useState, useEffect} from 'react'
import {socket} from './socket'
import {ConnectionState} from './components/ConnectionState'
import {ConnectionManager} from './components/ConnectionManager'
import {Events} from './components/Events'
import {MyForm} from './components/MyForm'
/* End Socket.IO */


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
/* Socket.io state variables */
const [isConnected, setIsConnected] = useState(socket.connected)
const [fooEvents, setFooEvents] = useState([])

/* Socket.io event handlers */
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
 
/* End Socket.IO */

  return (
    <ApolloProvider client={client}>
    <StoreProvider>
      <Nav />
      <Outlet />
      
<div style={{ position: 'absolute', right: '0', border: '2px solid black', marginRight: '20px', marginBottom: '10px'}}>
 <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
   <h1>Messenger</h1>
 </div>
 <ConnectionState isConnected={ isConnected } />
 <Events events={ fooEvents } />
 <ConnectionManager />
 <MyForm />
</div>

    </StoreProvider>
  </ApolloProvider>
  );
}

export default App;

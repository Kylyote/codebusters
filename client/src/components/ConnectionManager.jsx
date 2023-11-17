
import React, { useState } from 'react';
import { socket } from '../socket';

export function ConnectionManager() {
 const [isConnected, setIsConnected] = useState(false);

 function connect() {
   socket.connect();
   setIsConnected(true);
 }

 function disconnect() {
   socket.disconnect();
   setIsConnected(false);
 }

 return (
   <>
     <button onClick={ connect } style={{display: isConnected ? 'none' : 'inline'}}>Connect</button>
     <button onClick={ disconnect } style={{display: isConnected ? 'inline' : 'none'}}>Disconnect</button>
   </>
 );
}




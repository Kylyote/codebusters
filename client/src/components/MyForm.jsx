import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('create-something', value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={ onSubmit }>
      <input style={{width:"350px", height:"250px", marginLeft:'15px'}} onChange={ e => setValue(e.target.value) } placeholder="Send Message" />
 <br></br>

      <button type="submit" disabled={ isLoading } >Send Message</button>
     
    </form>
  );
}
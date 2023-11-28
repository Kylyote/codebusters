import { useState, useEffect } from 'react'
import { socket } from '../socket'
import io from 'socket.io-client'

export default function ChatModal({showModal}) {
 const [value, setValue] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [messageReceived, setMessageReceived] = useState("");
 const [messages, setMessages] = useState([]);
 

 function onSubmit(event) {
   event.preventDefault();
   setIsLoading(true);

   socket.timeout(5000).emit('send_message', value, () => {
     setIsLoading(false);
   });
 }

 useEffect(() => {
  socket.on('receive_message', (data) => {
    setMessages((prevMessages) => [...prevMessages, data.message]);
  });

  return () => {
    socket.off('receive_message');
  };
}, []);

 return (
  showModal && (
   <div className="modal" tabIndex="-1" role="dialog">
     <div className="modal-dialog" role="document">
       <div className="modal-content">
         <div className="modal-header">
           <h5 className="modal-title">Chat</h5>
         </div>
         <div className="modal-body">
           <form onSubmit={ onSubmit }>
             <input style={{width:"350px", height:"250px", marginLeft:'15px'}} onChange={ e => setValue(e.target.value) } placeholder="Send Message" />
             <br></br>
             <button type="submit" disabled={ isLoading } >Send Message</button>
           </form>
           { messages.map((message, index) => (
             <p key={ index }>{ message }</p>
           )) }
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
         </div>
       </div>
     </div>
   </div>
  )
 );
}

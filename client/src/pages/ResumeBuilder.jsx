import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const resumeBuilder = () => {
    return (
      <>
      <div className='resumeForm'>
        <Form>
          <Form.Group className='mb-3 justify-content-evenly' controlId='formFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder='First Name'/>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder='Last Name'/>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='text' placeholder='Phone Number'/>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email'/>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' placeholder='Address'/>
            <Form.Label>About Me</Form.Label>
            <Form.Control type='textfield' placeholder='About Me'/>
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
      </>
    )
  };
  
  export default resumeBuilder;
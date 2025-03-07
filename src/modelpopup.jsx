import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalPopup(display) {
    const{name,email,phoneNo,qualification,location}=display.data;
    console.log(display.data);

    const savechanges=()=>{

fetch(`https://67723b92ee76b92dd49181cc.mockapi.io/trail/data/${display.data.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(display.data)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
}).catch(error => {
  // handle error
}) 
  display.close();
    }
  return (
    <>
      <Modal show={display.status} onHide={display.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
               type="text"
               name="name"
               placeholder="Enter your name"
               onChange={(e)=>display.updatedata({...display.data,name:e.target.value})}
               defaultValue={name} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  name="email" defaultValue={email} placeholder="Enter your Email ID" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control type="tel" name="number" defaultValue={phoneNo} placeholder="Enter your Phone Number" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control type="text" name="qualification" defaultValue={qualification} placeholder="Enter Qualification" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" name="location" defaultValue={location} placeholder="Enter your location" autoFocus />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Email ID</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={display.close}>
            Close
          </Button>
          <Button variant="primary" onClick={savechanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
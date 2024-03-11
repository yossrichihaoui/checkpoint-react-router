import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Add_movie() {
const [show, setShow] = useState(false);
const [title,setTitle]=useState("")
const [poster,setPoster]=useState("")
const [description,setDescription]=useState("")
const [rating,setRating]=useState(0)
const [trailer,setTrailer]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleSubmit=()=>{
    var movie={title:title,poster:poster,description:description,rating:rating,trailer:trailer}
localStorage.setItem("newmovie",JSON.stringify(movie))
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
              onChange={(e)=>setTitle(e.target.value)}
                type="text"
                placeholder="put movie title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster</Form.Label>
              <Form.Control
               onChange={(e)=>setPoster(e.target.value)}
                type="text"
                placeholder="put movie image"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
               onChange={(e)=>setDescription(e.target.value)}
                type="text"
                placeholder="put movie description"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
               onChange={(e)=>setRating(e.target.value)}
                type="number"
                placeholder="put movie rating"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Trailer</Form.Label>
              <Form.Control
               onChange={(e)=>setTrailer(e.target.value)}
                type="text"
                placeholder="put movie trailer"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add_movie;
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

function Description({movies}) {
    const {title}=useParams()
    console.log(title)
const movie=movies.find(e=>e.title===title)
console.log(movie)
  return (
    <>
    <Link to={"/"}>go home</Link>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        
        <Card.Text>
            {movie.description}
        </Card.Text>
      
      </Card.Body>
      <iframe src={movie.trailer} width="1150" height="750"/>
    </Card></>
  );
}

export default Description;
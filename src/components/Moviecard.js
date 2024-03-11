import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

function Moviecard({movie}) {
    const x={height:"200px",overflowY:"auto"}
  return (
    <div style={{display:"flex",gap:"50px"}}>
       <Link to={`/Description/${movie.title}`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.poster} />
            <Card.Body>
              <Card.Title id="title">{movie.title}</Card.Title>
              <Card.Text style={x}>{movie.description}</Card.Text>
              <ReactStars
                count={5}
                size={32}
                value={movie.rating}
                color2={"#ffd700"}
              />
            </Card.Body>
          </Card>
          </Link>
          <iframe src={movie.trailer} width="1150" height="750"/>
        </div>
  )
}

export default Moviecard
import React from 'react'
import Navbar_start from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {

  const {id} = useParams();
  const navigate = useNavigate();

  const card = [
    {id:1,title:"card one"},
    {id:2,title:"card two"},
    {id:3,title:"card three"}
  ]
  
  const selectedCard = card.find((c)=>c.id===Number(id))
  return (
    <>
    <Navbar_start/>
    <h1>Home</h1>


    {card.map((cards) =>(

    
     <Card key={cards.id}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{cards.title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button onClick={() => navigate(`/home/:${cards.id}`)}>Go somewhere</Button>
      </Card.Body>
    </Card>



))}

{selectedCard && (
   <div style={{marginTop:"30px"}}>
          <h2>Selected Card Details</h2>
          <p>Title: {selectedCard.title}</p>
          <p>ID: {selectedCard.id}</p>
        </div>
)}
    
    </>
  )
}

export default Home
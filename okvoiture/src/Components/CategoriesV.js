import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Car = ({ car }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={car.image} />
    <Card.Body>
      <Card.Title>{car.brand}</Card.Title>
      <Card.Text>{car.description}</Card.Text>
      <Card.Text>Prix de location par jour : {car.pricePerDay} €</Card.Text>
      <Button variant="primary">Réserver</Button>
    </Card.Body>
  </Card>
);

function CategoriesV({ cars }) {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-3" >Catégories de voitures</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cars?.map((car, index) => (
        <Car car={car} key={index} />
      ))}
    </div> 
    </div>
  );
}

export default CategoriesV;


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Forms() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom: ', event.target.name.value);
    console.log('Email: ', event.target.email.value);
    console.log('Téléphone: ', event.target.phone.value);
    console.log('Ville: ', event.target.city.value);
    console.log('Image de voiture: ', file);
    console.log('Description: ', description);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="name" placeholder="Entrez votre nom" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Entrez votre email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="tel" name="phone" placeholder="Entrez votre numéro de téléphone" required />
            </Form.Group>

            <Form.Group controlId="formBasicCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control type="text" name="city" placeholder="Entrez votre ville" required />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Image de voiture</Form.Label>
              <Form.Control type="file" name="carImage" onChange={handleFileChange} required />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" rows="3" onChange={handleDescriptionChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Forms;

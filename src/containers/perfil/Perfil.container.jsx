import React from "react";
// Components

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class perfil extends React.Component {
  render() {
    return (
      <Form className="body" id="centro">
        <br />
        <br />
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Escribe tu email" />
          </Form.Group>

          <Form.Group as={Col} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="ocupacion">
          <Form.Label>Ocupación</Form.Label>
          <Form.Control placeholder="Ejem. Fotógrafo" />
        </Form.Group>

        <Form.Group controlId="intereses">
          <Form.Label>
            Intereses de imágenes (separados por coma, por favor)
          </Form.Label>
          <Form.Control placeholder="Ejem. paisajes, comida, retrato" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="ciudad">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="cp">
            <Form.Label>Código postal</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="Search-Container" id="button" type="submit">
          Enviar
        </Button>
      </Form>
    );
  }
}

export default perfil;

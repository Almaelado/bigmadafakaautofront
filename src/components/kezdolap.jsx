import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import http from '../http-common';

export default function Kezdolap() {
  const [autok, setAutok] = useState([]);
  const [kiemeltAutok, setKiemeltAutok] = useState([]);

  useEffect(() => {
    const fetchAutok = async () => {
      try {
        const response = await http.get("/auto/minden");
        setAutok(response.data);

        // Véletlenszerű 5 autó kiválasztása
        const shuffled = [...response.data].sort(() => 0.5 - Math.random());
        setKiemeltAutok(shuffled.slice(0, 5));
      } catch (error) {
        console.error("Hiba az autók lekérésekor:", error);
      }
    };

    fetchAutok();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Üdvözlünk a BigMadaFaka Auto-nál!</h1>
      <p className="text-center">
        Fedezd fel legújabb autóinkat és kedvező ajánlatainkat!
      </p>

      <Row className="mt-4">
        {kiemeltAutok.map((auto) => (
          <Col key={auto.id} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={`/img/${auto.id}_1.jpg`} />
              <Card.Body>
                <Card.Title>{auto.marka} {auto.modell}</Card.Title>
                <Card.Text>Ár: {auto.ar} Ft</Card.Text>
                <Button as={Link} to={`/auto/egy/${auto.id}`} variant="primary">Részletek</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

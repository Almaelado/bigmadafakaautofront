import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function bejelentkez() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Felhasználónév</Form.Label>
        <Form.Control type="text" placeholder="Felhasználónév" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Jelszó</Form.Label>
        <Form.Control type="password" placeholder="Jelszó" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Emlékezz rám" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Bejelentkezés
      </Button>
    </Form>
  );
}

export default bejelentkez;
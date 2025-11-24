import http from "../http-common";
import { useState,useEffect } from "react";
import {Card,ListGroup,Row, Col} from "react-bootstrap";
import './Autok.css';

const Autok = ({szuro}) => {
    const [autok, setAutok] = useState([]);
    console.log(szuro);
    const fetchAutok = async () => {
        try {
            const response = await http.get("/auto");
            setAutok(response.data);
        } catch (error) {
            console.error("Error fetching autok:", error);
        }
    };
    useEffect(() => {
        fetchAutok();
    }, []);

    return (
    <div className="autok-container">
    <h1>Autók Listája</h1>
    <div className="autok-grid">
        {autok.map((auto, index) => (
            <Card className="autok-card" key={index}>
                <Card.Img variant="top" src={`/img/${auto.id}_1.jpg`} />
                <Card.Body>
                    <Card.Title>{auto.nev} {auto.model}</Card.Title>
                    <Card.Text>{auto.leírás}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Szín: {auto.szin_nev}</ListGroup.Item>
                    <ListGroup.Item>{auto.km} km</ListGroup.Item>
                </ListGroup>
                <Card.Body>{auto.ar} Ft</Card.Body>
            </Card>
        ))}
    </div>
</div>

    );
};

export default Autok;

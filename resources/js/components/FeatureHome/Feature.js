import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

function Feature({ list }) {

  

    const renderFeatureItem = (list = []) => {
        return list.map((item) => {
            if (item.book_cover_photo === null) {
                item.book_cover_photo = "book1";
            }
            return <>
                <Col xs={3}>
                    <Card>

                        <Card.Img src={`/assets/bookcover/${item.book_cover_photo}.jpg`} className="card-img-top " alt="..." />
                        <Card.Body>
                            <Card.Title>{item.book_title}</Card.Title>
                            <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>

            </>
        })
    }

    return (
        // < className="home">


        <Container>
            <Row>
                {renderFeatureItem(list)}
            </Row>

        </Container>

        // </div >
    );
}


export default Feature;
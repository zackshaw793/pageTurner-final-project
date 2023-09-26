import React from "react";
import  Card  from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ReadingList = ({ readingList }) => { 
    return (
        <Container>
            <Row>
                <Col>
                {readingList.map((book, index) => (
                    <Card 
                    key={index}
                    style={{width: '315px', 
                            height: '570px', 
                            margin: '20px',
                            borderRadius: '16px'}}>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                        <Card.Img
                                width='300px 100%'
                                height='380px 100%'  
                                alt={book.title}
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}/>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>{book.author_name}</Card.Text>
                    </Card.Body>
                    </Card>

                ))}
               </Col>   
            </Row>
        </Container>
    )
}

export default ReadingList;


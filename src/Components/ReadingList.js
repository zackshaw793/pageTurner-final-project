import React from 'react';
import { useState, useEffect } from 'react';  
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ToggleButton  from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ReadingHeader from './ReadingHeader';

const MOCK_API_URL = 'https://650cc34347af3fd22f67f87e.mockapi.io/test/mustreads'

const ReadingList = () => {
    const [readingList, setReadingList] = useState([]);

    useEffect(() => { 
        fetch(MOCK_API_URL)
        .then((response) => response.json()).then((data) => {
            setReadingList(data);
        }   
        )
    }, []);

    const handleDelete = (id) => {
        fetch(`${MOCK_API_URL}/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setReadingList(readingList.filter((book) => book.id !== id));
        });
    };

    const handleFavorite = (id, favorited) => {
        const updatedReadingList = readingList.map((book) => {
            if (book.id === id) {
                return { ...book, favorited: !favorited};
            }
            return book;
        });
        
        
        fetch(`${MOCK_API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ favorited: !favorited }),
        }).then(() => {
            setReadingList(updatedReadingList);
        });
    };


return (
    <div>
        <Container>
                <Row>
                    <Col>
                        <ReadingHeader />
                        <ul className='book-list' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                            {readingList.map((book) => (
                                <li key={book.id}>
                                <Card 
                                    style={{width: '315px', 
                                            height: '570px',  
                                            margin: '20px',
                                            borderRadius: '16px',
                                            boxShadow: '2px 2px 8px gray'}}>
                                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                                        <Card.Img
                                                width='300px 100%'
                                                height='380px 100%'  
                                                alt={book.title}
                                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}/>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>{book.author_name}</Card.Text>
                                        <div className='d-flex gap-1'>
                                        <ButtonGroup toggle='true'>
                                            <ToggleButton
                                                    id={book.id}
                                                    type='checkbox'
                                                    variant='outline-danger'
                                                    checked={book.favorited}
                                                    value='1'
                                                    onChange={() => handleFavorite(book.id, book.favorited)} 
                                                    >
                                                {book.favorited ? '<3' : '</3'}
                                                    </ToggleButton>
                                        </ButtonGroup>
                                        <Button variant='outline-secondary' onClick={() => handleDelete(book.id)}>
                                            Read
                                        </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
    </div>
  )

}
export default ReadingList;
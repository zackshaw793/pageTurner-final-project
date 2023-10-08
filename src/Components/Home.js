import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import AddToList from './AddToList';
import  Card  from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeHeader from './HomeHeader';


// One source of truth for the API_URL.

const API_URL = 'https://openlibrary.org/search.json?title=';



  // The GetBooks component is a functional component that uses the useState hook to manage state.  

    const GetBooks = () => { 
        
        const [books, setBooks] = useState([]);
        const [readingList, setReadingList] = useState([]);

            // (GET)

            const fetchBooks = async (searchQuery) => { 
                try {
                    const response = await fetch(API_URL + searchQuery)
                    if (!response.ok) { 
                        throw new Error('Network response was not ok...')
                    }
                    const data = await response.json();
                    setBooks(data.docs);
                } catch (error) { 
                    console.error(error.message);
                }
            };

            const addToReadingList = (book) => { 
                setReadingList(book.id); 
                console.log(book);
            };

                        

        // The return statement renders the SearchBar component and the list of books returned from the API call after a user search.

        return (
            <Container>
                <Row>
                    <Col>
                        <HomeHeader />
                        <SearchBar onSearch={fetchBooks} />
                        <div className='book-list' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                            {books.map((book) => (
                                <Card 
                                    key={book.key}
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
                                        {/* The AddToList component is rendered here. */}
                                        <AddToList book={book} addToReadingList={addToReadingList}/>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>                    
                    </Col>
                </Row>
            </Container>
           
        )

    }

    export default GetBooks;
import React from 'react';
import { Component } from 'react';  


export default class ReadingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readingList: [],
        }
    }

    render() {
        return (
            <div>
                <h1>My Reading List</h1>
                <ul>
                    {this.state.readingList.map((book) => (
                        <li>
                            <Card 
                                key={book.key}
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
                            {/* The AddToList component is rendered here. */}
                            <AddToList book={book} addToReadingList={addToReadingList}/>
                        </Card.Body>
                    </Card></li>
                    ))}
                </ul>
            </div>
        )
    }

}
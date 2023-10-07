import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


const MOCK_API_URL = 'https://650cc34347af3fd22f67f87e.mockapi.io/test/mustreads';

const AddToList = ({ book }) => { 
    //const [readingList, setReadingList] = useState([]);
    const [favorited, setFavorited] = useState(false);
    const [books, setBooks] = useState([{}]);


    const handleAddToList = (e) => { 
        e.preventDefault(); 
        postToMockApi(book);
        console.log(book)
    };

const updateBook = (key) => { 
    fetch(`${MOCK_API_URL}/${key}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favorited: !favorited }),
    })
    .then(() => { 
       setFavorited(!favorited);
    })
    .then(() => { 
        setBooks();
    })  
}

const postToMockApi = () => {

        const bookToData = {
            ...book,
            favorited: true,
        }

        fetch(MOCK_API_URL, {
            method: "POST",
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(bookToData),      
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
   
    }

    useEffect(() => { 
        setBooks(book);
    }, []);

    return ( 
        <Button variant='secondary' onClick={handleAddToList}>
            Must Read
        </Button>
    )
}

export default AddToList;
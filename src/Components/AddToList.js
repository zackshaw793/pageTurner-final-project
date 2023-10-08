import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

// One source of truth for fetching data from mockAPI.

const MOCK_API_URL = 'https://650cc34347af3fd22f67f87e.mockapi.io/test/mustreads';

// The AddToList component is a functional component that uses the useState hook to manage state. 
// The component is rendered in the GetBooks component.

const AddToList = ({ book }) => { 
    const [books, setBooks] = useState([{}]);

    const handleAddToList = (e) => { 
        e.preventDefault(); 
        postToMockApi(book);
    };

    // postToMockApi is called here for the sake of seperation of concerns.

    const postToMockApi = () => {

        const bookToData = {
            ...book,
            favorited: false,
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

    // useEffect is used here to update the state of the books array with the book object passed in as props from the GetBooks component.

    useEffect(() => { 
        setBooks(book);
    }, []);

    return ( 
        <Button variant='outline-secondary' onClick={handleAddToList}>
            Must Read
        </Button>
    )
}

export default AddToList;
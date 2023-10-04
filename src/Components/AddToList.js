import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { getReadingList } from '../api/mockApi';

// addToReadingList is a prop passed down from src/Components/ApiHandle.js

const AddToList = ({ book, addToReadingList }) => { 
    const handleClick = (e) => { 
        e.preventDefault();;   
    };

    useEffect(() => { 
        getReadingList().then((data) => { 
            addToReadingList(data);
        })
    }, []);

    return ( 
        <Button variant='secondary' onClick={handleClick}>
            Must Read
        </Button>
    )
}

export default AddToList;
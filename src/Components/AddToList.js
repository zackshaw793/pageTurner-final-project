import React from 'react';
import Button from 'react-bootstrap/Button';

const AddToList = ({ book, addToReadingList }) => { 
    const handleClick = () => { 
        addToReadingList(book);
    };

    return ( 
        <Button varient='secondary' onClick={handleClick}>
            Must Read
        </Button>
    )
}

export default AddToList;
import { useState } from 'react'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup  from 'react-bootstrap/InputGroup';
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



const SearchBar = ({ onSearch }) => { 
   const [searchQuery, setSearchQuery] = useState('')

   const handleSearch = () => { 
        onSearch(searchQuery);
   };

   return (
    <Card style={{ width: 'auto', 
                   display: 'block', 
                   borderRadius: '16px',
                   marginTop: '25px'}}>
        <Card.Body style={{ alignContent: 'center', 
                            justifyContent: 'center', 
                            background: 'white', 
                            borderRadius: '16px'}}>
            <InputGroup className='mb-3 mt-3'>
                <FormControl
                    placeholder='Find a book...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant='secondary' onClick={handleSearch}>
                    Search
                </Button>
            </InputGroup>
        </Card.Body>
    </Card>
   )
}

export default SearchBar;
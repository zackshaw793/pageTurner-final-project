import React from 'react';
import Container from 'react-bootstrap/Container';

// A Header for the Home page.

const HomeHeader = () => { 
    return (
        <div>
            <Container className='d-flex 
                           flex-column 
                           justify-content-center
                           align-items-center
                           mt-5
                           p-5' style={{background: 'white',
                                         borderRadius: '16px',
                                         padding: '100px'}}>
                <h3 style={{fontSize: '10vw',
                            display: 'block',
                            marginBottom: '10%'}}>pageTurner</h3>
                    <p style={{fontSize: '2vw'}}>A simple resource for saving and organizing your reading list.
                         Mark your favorites, or add books you would like to read. Simply search below.
                    </p>
            </Container>     
        </div>
    );
}

export default HomeHeader;
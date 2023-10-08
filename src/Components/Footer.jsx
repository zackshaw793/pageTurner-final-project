import React from 'react';
import Container from 'react-bootstrap/Container';

// A Footer for copyright. 

const FooterComponent = () => {
    return (
        <div>
            <Container style={{display: 'flex',
                               justifyContent: 'center',
                               alignItems: 'center',
                               fontSize: '.75vw',
                               marginTop: '1vw'}}>
                <p>©2023 Zachary Shaw</p>
            </Container>    
        </div>
    );
}

export default FooterComponent;
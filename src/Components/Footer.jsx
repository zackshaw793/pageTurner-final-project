import React from 'react';
import Container from 'react-bootstrap/Container';

const FooterComponent = () => {
    return (
        <div>
            <Container style={{display: 'flex',
                               justifyContent: 'center',
                               alignItems: 'center',
                               fontSize: '.75vw',
                               marginTop: '10vw'}}>
                <p>©2023 Zachary Shaw</p>
            </Container>    
        </div>
    );
}

export default FooterComponent;
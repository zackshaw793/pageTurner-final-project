import React from 'react';
import Container from 'react-bootstrap/Container';


// Header for the Signup page. 

const SignUpHeader = () => {
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
                            marginBottom: '17px'}}>sign Up</h3>
                    <p style={{fontSize: '2vw'}}>Sign up to save your favorites.</p>                   
            </Container>     
        </div>
    );
}

export default SignUpHeader;
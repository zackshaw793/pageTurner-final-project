import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Component } from 'react';

export default class SignUp extends Component { 
    render() {
    return (
        <div>
            <Container>
                <Row className='vh-100 d-flex justify-content-center align-items-center'>
                    <Col md={8} lg={6} xs={12}>
                        <div className='border border-0 border-secondary'></div>
                        <Card className='shadow p-5'>
                            <Card.Body>
                                <div className='mb-3 mt-md-10'>
                                    <h2 className='fw-bold mb-2'>pageTurner</h2>
                                    <p className='mb-5'>Please enter a valid email address and password.</p>
                                    <div className='mb-3'>
                                        <Form>
                                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                                <Form.Label className='text-center'>
                                                    Email address.
                                                </Form.Label>
                                                <Form.Control type='email' placeholder='Enter email' />
                                            </Form.Group>
                                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type='password' placeholder='Password' />
                                            </Form.Group>
                                            <div className='d-grid'>
                                                <Button variant='secondary' type='submit'>
                                                    signUp
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}
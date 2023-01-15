import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Breadcrumb, Card, Form } from 'react-bootstrap';


function Screen () {
    return (
        <>
            <div>
                <header>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Exmpl@gmail.com' />

                        </Form.Group>
                    </Form>
                    <Card className='mb-3' style={{color : '#000'}}>
                        <Card.Img src="https://picsum.photos/200/100" />
                        <Card.Body>
                            <Card.Title>
                                Example
                            </Card.Title>
                            <Card.Text>
                                This is an example of react bootstrap cards
                            </Card.Text>
                        </Card.Body>
                        <Button variant='primary'> Read more </Button>
                    </Card>
                    <Breadcrumb>
                        <Breadcrumb.Item>Teste 1 </Breadcrumb.Item>
                        <Breadcrumb.Item>Teste 2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Teste 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Alert variant="sucess">This is a button</Alert>
                    <Button> Teste Button </Button>
                </header>
            </div>

        </>
    )
};

export default Screen;
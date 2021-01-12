import React, { Component } from "react";
import { Form, Button, Col,  } from 'react-bootstrap';
import { Route , Redirect} from 'react-router-dom';

import './login.sass';

class Login extends Component {
    
    state = {
        validated: false,
        email: null,
        password: null
    }

    values = {
      
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({
            validated: true
        });
    };

    // handleChange(event) {
    //     let fieldName = event.target.name;
    //     let fleldVal = event.target.value;
    //     this.setState({form: {...this.state.form, [fieldName]: fleldVal}})
    //   }



    login = (e) => {

        e.preventDefault();

        

            alert("You are successfully signed in...");
            // return <Redirect to="/home" />;

        
    }

    render() {


        return (
            <div className="Login">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="basant@mounir.com"
                                value={this.state.email}
                                onChange={(event)=>{
                                    this.setState({
                                        email: event.target.value
                                    })
                                }}

                                
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder=""
                                value={this.state.password}
                                isValid={this.state.password != null && this.state.password.length > 6}
                                onChange={(event)=>{
                                    this.setState({
                                        password: event.target.value
                                    })
                                }}


                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form.Row>
                   <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>
                    <Button type='submit' onClick={this.login}>Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login;
import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import{ Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, InputGroup, InputGroupAddon, InputGroupText, Form , Input} from 'reactstrap';
import { faUser, faEnvelope, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var axios = require('axios');

class Main extends React.Component{

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen : false,
            modalLogin : false,
            modelSignUp : false,
            firstName : '',
            lastName : '',
            emailAddress : '',
            password : '',
            confirmPassword : ''
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModalLogin() {
        this.setState({
            modalLogin: !this.state.modalLogin
        });
    }

    toggleModalSignUp() {
        this.setState({
            modalSignUp: !this.state.modalSignUp
        });
    }

    onChangeConfirmPassword = (password) => {
        this.setState({confirmPassword : password.target.value})
    }

    onChangePassword = (password) => {
        this.setState({password : password.target.value})
    }

    onChangeEmail = (email) => {
        this.setState({emailAddress : email.target.value})
    }

    onChangeFirstName = (fname) => {
        this.setState({firstName : fname.target.value})
    }

    onChangeLastName = (lname) => {
        this.setState({lastName : lname.target.value})
    }

    SignUp = () => {

        if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match');
        } else {
            
            axios({
                method: 'post',
                url: '/signup',
                timeout: 60 * 4 * 1000,
                data: this.state
            })
             .then((result) => {
                console.log("sent data")
                if (!result.data.Success) {
                    this.props.history.push('/auth/signup');
                    alert("Unable to SignUp")
                } else {
                    this.props.history.push('/learn/');
                }
             });
        }
    }

    Login = () => {

        axios.post('/login', this.state)
             .then((result) => {

                if (!result.data.Success) {
                    this.props.history.push('/auth/login');
                    alert("Unable to Login");
                } else {
                    this.props.history.push('/learn/');
                }
             });
        
    }

    render(){
        return(
            <div>
                <Navbar expand="lg" color="info">
                    <Container>
                        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>Lets Learn Words</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink onClick={this.toggleModalLogin.bind(this)}>
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleModalSignUp.bind(this)}>
                                        SignUp
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <Modal
                    className="modal-login"
                    modalClassName=" modal-info"
                    isOpen={this.state.modalLogin}
                    toggle={this.toggleModalLogin.bind(this)}
                >
                    <Card className="card-login card-plain" color='info'>
                        <div className="modal-header justify-content-center">
                            <button
                                aria-hidden={true}
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={this.toggleModalLogin}
                            >
                                
                            </button>
                            <div className="header header-primary text-center">
                                <FontAwesomeIcon icon={faUser} size='4x'/>
                            </div>
                        </div>
                        <div className="modal-body">
                            <Form action="" className="form" method="">
                                <div className="card-content">
                                    <div>
                                        <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                                        <Input
                                                placeholder="Email Address"
                                                className="modalInput"
                                                type="text"
                                                onChange = {this.onChangeEmail.bind(this)}
                                        />
                                    </div>
                                    <br/>
                                    <div>   
                                        <FontAwesomeIcon icon={faKey} size='2x'/>                                   
                                        <Input
                                            placeholder="Password"
                                            type="password"
                                            className="modalInput"
                                            onChange = {this.onChangePassword.bind(this)}
                                        />
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="modal-footer text-center pt-4">
                            <Button
                                block
                                className="btn-neutral btn-round get-started"
                                onClick={this.Login.bind(this)}
                                size="lg"
                            >
                                Login
                            </Button>
                        </div>
                    </Card>
                </Modal>  
                <Modal
                    className="modal-login"
                    modalClassName=" modal-info"
                    isOpen={this.state.modalSignUp}
                    toggle={this.toggleModalSignUp.bind(this)}
                >
                    <Card className="card-login card-plain" color='info'>
                        <div className="modal-header justify-content-center">
                            <button
                                aria-hidden={true}
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={this.toggleModalSignUp}
                            >
                                
                            </button>
                            <div className="header header-primary text-center">
                                <FontAwesomeIcon icon={faUser} size='4x'/>
                            </div>
                        </div>
                        <div className="modal-body">
                            <Form action="" className="form" method="">
                                <div className="card-content">
                                    <div>
                                        <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                                        <Input
                                                placeholder="Email Address"
                                                className="modalInput"
                                                type="text"
                                                onChange = {this.onChangeEmail.bind(this)}
                                        />
                                    </div>
                                    <br/>
                                    <div>
                                        <FontAwesomeIcon icon={faUserCircle} size='2x'/>
                                        <Input
                                                placeholder="First Name"
                                                className="modalInput"
                                                type="text"
                                                onChange = {this.onChangeFirstName.bind(this)}
                                        />
                                    </div>
                                    <br/>
                                    <div>
                                        <FontAwesomeIcon icon={faUserCircle} size='2x'/>
                                        <Input
                                                placeholder="Last Name"
                                                className="modalInput"
                                                type="text"
                                                onChange = {this.onChangeLastName.bind(this)}
                                        />
                                    </div>
                                    <br/>
                                    <div>   
                                        <FontAwesomeIcon icon={faKey} size='2x'/>                                   
                                        <Input
                                            placeholder="Password"
                                            type="password"
                                            className="modalInput"
                                            onChange = {this.onChangePassword.bind(this)}
                                        />
                                    </div>
                                    <br/>
                                    <div>   
                                        <FontAwesomeIcon icon={faKey} size='2x'/>                                   
                                        <Input
                                            placeholder="Confirm Password"
                                            type="password"
                                            className="modalInput"
                                            onChange = {this.onChangeConfirmPassword.bind(this)}
                                        />
                                    </div>

                                </div>
                            </Form>
                        </div>
                        <div className="modal-footer text-center pt-4">
                            <Button
                                block
                                className="btn-neutral btn-round get-started"
                                onClick={this.SignUp.bind(this)}
                                size="lg"
                            >
                                Get Started
                            </Button>
                        </div>
                    </Card>
                </Modal>     
            </div>
        );
    }
}

export default Main;
import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, CardBody, CardTitle } from 'reactstrap';
import{ Button, Modal, Progress, ModalBody, ModalFooter, Card, InputGroup, InputGroupAddon, InputGroupText, Form , Input, Alert} from 'reactstrap';
import { faUser, faEnvelope, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GaugeChart from 'react-gauge-chart'

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
            confirmPassword : '',
            message : '',
            progressBar : 0,
            progressBarPercent : 0,
            streak : 0.5
        };
    }

    componentDidMount = () => {

        this.getStreak();
        this.getProgress();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModalLogin() {
        this.setState({
            modalLogin: !this.state.modalLogin,
            isOpen : false
        });
    }

    toggleModalSignUp() {
        this.setState({
            modalSignUp: !this.state.modalSignUp,
            isOpen : false
        });
    }

    getStreak = () => {

        axios.get('/get-streak')
            .then((result) => {

            if (!result.data.Success) {
                console.log("here we are")
            } else {
                this.setState({
                    streak : (result.data.streak + 50)/100.0
                });
                console.log('Strreak is now', this.state.streak)
            }
            });
    }

    getProgress = () => {
        axios.get('/progress-bar', this.state)
            .then((result) => {

            if (!result.data.Success) {
                console.log("here we are")
            } else {
                this.setState({
                    progressBar : result.data.learnt
                });
            }
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
            
            axios.post('/signup', this.state)
             .then((result) => {
                if (!result.data.Success) {
                    this.setState({message:'Username already taken'})
                    document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'visible';
                    setTimeout(function() { 
                        document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'hidden';
                    }, 2000);
                } else {
                    this.props.history.push('/');
                    this.toggleModalSignUp();
                    this.setState({
                        message : "SignUp Successful, click on Learn Words to start learning"
                    });
                    document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'visible';
                    setTimeout(function() { 
                        document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'hidden';
                    }, 2000);

                    this.getStreak();
                    this.getProgress();
                    
                }
             });
        }

    }

    Login = () => {

        axios.post('/login', this.state)
             .then((result) => {

                if (!result.data.Success) {
                    console.log("here we are")
                    this.setState({message:'Incorrect Username or Password'})
                    document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'visible';
                    setTimeout(function() { 
                        document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'hidden';
                    }, 2000);
                } else {
                    this.props.history.push('/');
                    this.toggleModalLogin();
                    this.setState({
                        message : "Login Successful, click on Learn Words to start learning"
                    });
                    document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'visible';
                    setTimeout(function() { 
                        document.getElementsByClassName('alerts-main-page')[0].style.visibility = 'hidden';
                    }, 2000);

                    this.getStreak();
                    this.getProgress();

                }
             });

    }

    LearnWords = () => {
        this.props.history.push('/learn/');
    }

    hideAlert = () => {
        document.getElementsByClassName('alerts')[0].style.visibility = 'hidden';
    }

    render(){
        return(
            <div>
                <Navbar expand="lg" color="info">
                    <Container>
                        <NavbarBrand onClick={e => e.preventDefault()}>Learn Words GRE</NavbarBrand>
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
                                <NavItem>
                                    <NavLink onClick={this.LearnWords.bind(this)}>
                                        Learn Words
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <br/>
                <div className="alerts-main-page" style={{visibility:"hidden"}} onClick={this.hideAlert.bind(this)}>
                    <Alert color='warning' className='text-center'>{this.state.message}</Alert>
                </div>
                <div className="main-body">
                    <div className="content text-center">
                        <h1>Learn GRE words taken from the Essential 800 words of Barron's List</h1>
                        <h2>SignUp to Get Started</h2>
                        <br/>
                        <br/>
                        <h2>Features:</h2>
                        <ul>
                            <li><h3>One stop to ace the GRE verbal</h3></li>
                            <li><h3>Flag words that you have a difficulty remembering</h3></li>
                            <li><h3>AI based word iteration to help you learn fastest</h3></li>
                            <li><h3>Keep track of your performance with a streak count</h3></li>
                        </ul>
                    </div>
                    
                    <div className="giphy text-center">
                        <img src={require('../assets/trump.gif')} alt="loading..." />
                    </div>
                    <br/>

                    <br/>
                    <div className='progressBar'>
                        <Card>
                            <div className="progress-container progress-info">
                                <CardBody>
                                    <CardTitle>Progress</CardTitle>
                                </CardBody>
                                <Progress max="800" value={this.state.progressBar} barClassName="progress-bar-info" className='progressBarValue'>
                                    <span>{this.state.progressBarPercent}%</span>
                                </Progress>
                                <br/>
                            </div>
                        </Card>
                    </div>
                    <div className='streak'>
                        <Card>
                            <CardBody>
                                <CardTitle>Streak Count</CardTitle>
                            </CardBody>
                            <GaugeChart id="gauge-chart" 
                                nrOfLevels={50}
                                colors={['#00ff00', '#00ffff', '#0000ff']}
                                percent={this.state.streak}
                                arcWidth={0.3} 
                                arcPadding={0.02}
                                formatTextValue={value => value - 50}
                            />
                        </Card>
                    </div>
                </div>
                
                <Modal
                    className="modal-login homepage-modal"
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
                    className="modal-login homepage-modal"
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
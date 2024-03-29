import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, CardBody, CardTitle, CardText } from 'reactstrap';
import{ Button, Modal, Progress, ModalBody, ModalFooter, Card, InputGroup, InputGroupAddon, InputGroupText, Form , Input, Alert} from 'reactstrap';
import { faUser, faEnvelope, faKey, faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GaugeChart from 'react-gauge-chart'
import HomeWordList from './HomeWordList';

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
            streak : 0.5,
            leaderboard : {}
        };
    }

    componentDidMount = () => {

        this.getLeaderboard();
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

    getLeaderboard = () => {
        axios.get('/get-leaderboard')
            .then((result) => {

            if (!result.data.Success) {
                this.setState({
                    leaderboard : {}
                });
            } else {
                this.setState({
                    leaderboard : result.data.leader_board
                });
            }
            });
    }

    getStreak = () => {

        axios.get('/get-streak')
            .then((result) => {

            if (!result.data.Success) {
                this.setState({
                    streak : 0.5
                });
            } else {
                this.setState({
                    streak : (result.data.streak + 50)/100.0
                });
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
                    progressBar : result.data.learnt,
                    progressBarPercent : (result.data.learnt)*100/994.0 //800 with barrons
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

    scrollDown = () => {
        window.scrollTo({left:0,top:500,behavior: 'smooth'})
    }

    render(){
        const items = []
        var elements = this.state.leaderboard

        var values = Object.keys(elements).map(function(key) {
            return [key, elements[key]];
        });

        values.sort(function(first, second) {
            return second[1] - first[1];
        });
        
        for (var i=0; i<values.length; i++) { // now lets iterate in sort order
            let barColor = 'progress-green'
            if (values[i][1]<0) {
                barColor = 'progress-danger'
            }
            var key = values[i][0];
            var value = values[i][1];
            items.push(
                <div className={"progress-container " + barColor}>
                    <span><p className="h5 leaderboardKey">{key}</p></span>
                    <Progress max="100" value={value+50} barClassName="progress-bar-info" className='leaderBarValue'>
                            <span>{value}</span>
                    </Progress>
                </div>
            )
        }

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
                                    <NavLink onClick={this.toggleModalLogin.bind(this)} className='mouseChange'>
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleModalSignUp.bind(this)} className='mouseChange'>
                                        SignUp
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.LearnWords.bind(this)} className='mouseChange'>
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
                    <div className="headings text-center">
                        <h1>Learn GRE words taken from the Essential 800 words of Barron's List</h1>
                        <h2>SignUp to Get Started</h2>                        
                    </div>
                    <div className="text-center">
                        <Button className='btn-simple btn-icon btn-round choice-button' onClick={this.scrollDown.bind(this)}><FontAwesomeIcon icon={faChevronDown} size='3x'/></Button>
                    </div>
                    <div className="content text-center">
                        <div className='homeGif'>
                            <img src={require('../assets/book.gif')} alt="loading..." style={{float:"left"}} />
                        </div>
                        <p className='homeText'>
                            Access to the Essential 800
                            <br/>
                            <span style={{fontSize:'large'}}>No need to carry heavy books. Get access to the list, anytime, anywhere, on your PC or Mobile Browser while on the go.</span>
                        </p>
                    </div>
                    <div className="content text-center">
                        <div className='homeGif'>
                            <img src={require('../assets/flag.gif')} alt="loading..." style={{float:"left"}} />
                        </div>
                        <p className='homeText'>
                            Flag Words
                            <br/>
                            <span style={{fontSize:'large'}}>Finding it hard to remember a word and need frequent exposure to it? Just flag it! </span>
                        </p>
                    </div>
                    <div className="content text-center">
                        <div className='homeGif'>
                            <img src={require('../assets/ai.gif')} alt="loading..." style={{float:"left"}} />
                        </div>
                        <p className='homeText'>
                            Use AI to speed up your learning
                            <br/>
                            <span style={{fontSize:'large'}}>Advanced neural networks used to predict words you are less likely at remembering render them at appropriate intervals</span>
                        </p>
                    </div>
                    <div className="content text-center">
                        <div className='homeGif'>
                            <img src={require('../assets/motivation.gif')} alt="loading..." style={{float:"left"}} />
                        </div>
                        <p className='homeText'>
                            Motivation is everything
                            <br/>
                            <span style={{fontSize:'large'}}>Compete with your friends over at the leaderboard to see how each of you fare. After all, a healthy competition is bound to be good</span>
                        </p>
                    </div>
                    <div className='progressBar'>
                        <Card>
                            <div className="progress-container progress-info">
                                <CardBody>
                                    <CardTitle>Progress</CardTitle>
                                    <CardText className='fancyFont1'>
                                        Number of words learnt: {this.state.progressBar}
                                        <br/>
                                        Percentage of words completed: {this.state.progressBarPercent}%
                                        <br/>
                                    </CardText>
                                </CardBody>
                                <Progress max="994" value={this.state.progressBar} barClassName="progress-bar-info" className='progressBarValue'>
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
                    <div className='leaderboard'>
                        <Card>
                            <CardBody>
                                <CardTitle>Leaderboard</CardTitle>
                            </CardBody>
                                {items}
                                <br/>
                        </Card>
                    </div>
                    <div className='wordlist'>
                        <Card>
                            <CardBody>
                                <CardTitle>The Essential 800 List</CardTitle>
                            </CardBody>
                        </Card>
                        <HomeWordList />
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
                                                placeholder="Username"
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
                                                placeholder="Username"
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
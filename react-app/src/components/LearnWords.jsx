import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardFooter, CardHeader, Alert } from 'reactstrap';
import { faSignOutAlt, faCheck, faTimes, faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var React = require('react');
const axios = require('axios');
var ReactDOM = require('react-dom');

class LearnWords extends React.Component {

    state = {
        word : "",
        meaning : "",
        revealMeaning : "",
        className : "",
        content : ""
    }

    componentDidMount = () => {
        var word, meaning
        axios.get('/get-words')
             .then((result) => {

                if (!result.data.Success) {
                    alert("Cant get word dude :(");
                } else {
                    console.log(result);
                    word = result.data.word;
                    meaning = result.data.meaning;

                    this.setState({
                        word : word,
                        meaning : meaning,
                        revealMeaning : ""
                    })

                }
             });
    }

    rememberWord = () => {
        var word, meaning
        axios.post('/learnt-word', this.state)
             .then((result) => {

                if (!result.data.Success) {
                    alert("Cant get word dude :(");
                } else {
                    word = result.data.word;
                    meaning = result.data.meaning;

                    this.setState({
                        word : word,
                        meaning : meaning,
                        revealMeaning : ""
                    })
                }
                
             });

    }

    dontRememberWord = () => {
        var word, meaning
        axios.post('/forgot-word', this.state)
             .then((result) => {

                if (!result.data.Success) {
                    alert("Cant get word dude :(");
                } else {
                    word = result.data.word;
                    meaning = result.data.meaning;

                    this.setState({
                        word : word,
                        meaning : meaning,
                        revealMeaning : ""
                    })
                }
                
             });
    }

    revealMeaning = () => {

        this.setState({
            revealMeaning : this.state.meaning
        })

        document.getElementsByClassName('meaning-card')[0].style.visibility = 'visible';
    }

    openFlaggedWords = () => {
        this.props.history.push('/flagged')
    }

    flagWord = () => {

        var word, meaning
        axios.post('/add-flag', this.state)
             .then((result) => {

                if (!result.data.Success) {
                    alert("Cant get word dude :(");
                } else {
                    document.getElementsByClassName('alerts')[0].style.visibility = 'visible';
                    setTimeout(function() { 
                        document.getElementsByClassName('alerts')[0].style.visibility = 'hidden';
                    }, 2000);
                }
                
             });
    }

    Logout = () => {
        this.props.history.push("/")
    }
    
    hideAlert = () => {
        document.getElementsByClassName('alerts')[0].style.visibility = 'hidden';
    }

    render() {
        return (
            <div>
                <div className="alerts" style={{visibility:"hidden"}} onClick={this.hideAlert.bind(this)}>
                    <Alert color='info'>Word has been flagged</Alert>
                </div>
                <div className="flagged-words">
                    <Button className='btn-simple btn-round' color='info'  onClick={this.openFlaggedWords.bind(this)}>Flagged Words</Button>
                </div>
                <div className="logout">
                    <Button className='btn-simple btn-round' color='info'  onClick={this.Logout.bind(this)}><FontAwesomeIcon icon={faSignOutAlt}/></Button>
                </div>
                <div className="learn-words">
                    <Card className="learn-card text-center" onClick={this.revealMeaning.bind(this)}>
                        <CardBody>
                            <CardTitle>{this.state.word}</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="learn-card text-center meaning-card" style={{visibility:"hidden"}}>
                        <CardBody>
                            <CardText className="meaning">{this.state.revealMeaning}</CardText>
                        </CardBody>
                    </Card>
                    <Card className="learn-card text-center operations">
                        <CardBody>
                            <Button onClick={this.rememberWord.bind(this)} color='primary' className='button-size'><FontAwesomeIcon icon={faCheck} size='2x'/></Button>
                            <Button onClick={this.dontRememberWord.bind(this)} color='warning' className='button-size'><FontAwesomeIcon icon={faTimes} size='2x'/></Button>
                            <br/>
                            <br/>
                            <Button onClick={this.flagWord.bind(this)} color='danger'><FontAwesomeIcon icon={faFlag} size='2x'/></Button>
                        </CardBody>
                    </Card>

                </div>
            </div> 
        );
    }
}

export default LearnWords;

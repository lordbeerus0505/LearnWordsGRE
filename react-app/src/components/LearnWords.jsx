import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardFooter, CardHeader, Alert } from 'reactstrap';
import { faSignOutAlt, faCheck, faTimes, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const axios = require('axios');
var ReactDOM = require('react-dom');

class LearnWords extends React.Component {

    state = {
        word : "",
        meaning : "",
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
                        meaning : meaning
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
                        meaning : meaning
                    })
                }
                
             });
        document.getElementsByClassName('meaning-card')[0].style.visibility = 'hidden';
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
                        meaning : meaning
                    })
                }
                
             });
        document.getElementsByClassName('meaning-card')[0].style.visibility = 'hidden';
    }

    revealMeaning = () => {
        document.getElementsByClassName('meaning-card')[0].style.visibility = 'visible';
    }

    openFlaggedWords = () => {
        this.props.history.push('/flagged')
    }

    openLearntWords = () => {
        this.props.history.push('/learnt')
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
                <div className="flagged-words">
                    <Button className='btn-simple btn-round' color='info'  onClick={this.openLearntWords.bind(this)}>Words Learnt</Button>
                </div>
                <div className="logout">
                    <Button className='btn-simple btn-round' color='info'  onClick={this.Logout.bind(this)}><FontAwesomeIcon icon={faSignOutAlt}/></Button>
                </div>
                <div className="learn-words">
                    <Card className="learn-card text-center" 
                        onMouseOver = {this.revealMeaning.bind(this)}
                    >
                        <CardBody>
                            <CardTitle>{this.state.word}</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="learn-card text-center meaning-card" style={{visibility:"hidden"}}>
                        <CardBody>
                            <CardText className="meaning">{this.state.meaning}</CardText>
                        </CardBody>
                    </Card>
                    <Card className="learn-card text-center operations">
                        <CardBody>
                            <Button onClick={this.rememberWord.bind(this)} color='twitter' className='btn-round btn-icon choice-button'><FontAwesomeIcon icon={faCheck} size='2x'/></Button>
                            <Button onClick={this.dontRememberWord.bind(this)} color='warning' className='btn-round btn-icon choice-button'><FontAwesomeIcon icon={faTimes} size='2x'/></Button>
                            <br/>
                            <Button onClick={this.flagWord.bind(this)} color='danger' className='btn-round btn-icon choice-button'><FontAwesomeIcon icon={faFlag} size='2x'/></Button>
                        </CardBody>
                    </Card>

                </div>
            </div> 
        );
    }
}

export default LearnWords;

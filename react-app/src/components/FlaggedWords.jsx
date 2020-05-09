import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardFooter, CardHeader, Alert } from 'reactstrap';
import { faSignOutAlt,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {faFlag} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var React = require('react');
const axios = require('axios');
var ReactDOM = require('react-dom');

class FlaggedWords extends React.Component {

    state = {
        word : "",
        meaning : "",
    }

    componentDidMount = () => {
        var word, meaning
        axios.get('/get-flagged-word')
             .then((result) => {

                if (!result.data.Success) {
                    alert("Cant get word dude :(");
                } else {
                    word = result.data.word;
                    meaning = result.data.meaning;
                    console.log(result.data)
                    this.setState({
                        word : word,
                        meaning : meaning
                    })

                }
             });
    }

    nextWord = () => {

        var word, meaning
        axios.get('/get-flagged-word', this.state)
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

    unFlagWord = () => {
        var word, meaning
        axios.post('/unflag-word', this.state)
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

    openLearnWords = () => {
        this.props.history.push('/learn')
    }

    hideAlert = () => {
        document.getElementsByClassName('alerts')[0].style.visibility = 'hidden';
    }

    Logout = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <div className="alerts" style={{visibility:"hidden"}} onClick={this.hideAlert.bind(this)}>
                    <Alert color='success'>Word has been flagged</Alert>
                </div>
                <div className="flagged-words">
                    <Button className='btn-simple btn-round' color='info' onClick={this.openLearnWords.bind(this)}>Learn Words</Button>
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
                            <Button className='btn-round btn-icon choice-button' onClick={this.nextWord.bind(this)} color='info'><FontAwesomeIcon icon={faFlag} size='2x'/></Button>
                            <Button className='btn-round btn-icon choice-button' onClick={this.nextWord.bind(this)} color='primary'><FontAwesomeIcon icon={faChevronRight} size='2x'/></Button>
                        </CardBody>
                    </Card>
                </div>
            </div> 
        );
    }
}

export default FlaggedWords;

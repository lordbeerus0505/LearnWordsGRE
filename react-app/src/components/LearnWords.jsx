import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardFooter, CardHeader, Alert } from 'reactstrap';

var React = require('react');
const axios = require('axios');
var ReactDOM = require('react-dom');

class LearnWords extends React.Component {

    state = {
        word : "",
        meaning : "",
        revealMeaning : ""
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
    
    hideAlert = () => {
        document.getElementsByClassName('alerts')[0].style.visibility = 'hidden';
    }

    render() {
        return (
            <div>
                <div className="alerts" style={{visibility:"hidden"}} onClick={this.hideAlert.bind(this)}>
                    <Alert color='success'>Word has been flagged</Alert>
                </div>
                <div className="flagged-words">
                    <Button className='btn-simple btn-round' color='info'  onClick={this.openFlaggedWords.bind(this)}>Flagged Words</Button>
                </div>
                <div className="learn-words">
                    <Card className="learn-card">
                        <CardHeader className="text-center">
                            <CardTitle>{this.state.word}</CardTitle>
                        </CardHeader>
                        <CardBody className="card-body" className="text-center">
                            <CardText>{this.state.revealMeaning}</CardText>
                            <br/>
                            <Button color='info' onClick={this.revealMeaning.bind(this)}>Reveal</Button>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button onClick={this.rememberWord.bind(this)} color='primary' className='button-size'>I remember this</Button>
                            <Button onClick={this.dontRememberWord.bind(this)} color='warning' className='button-size'>Dont Remember yet</Button>
                            <br/>
                            <br/>
                            <Button onClick={this.flagWord.bind(this)} color='danger'>Flag Word</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div> 
        );
    }
}

export default LearnWords;

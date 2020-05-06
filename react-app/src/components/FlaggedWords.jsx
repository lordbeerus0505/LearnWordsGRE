import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardFooter, CardHeader, Alert } from 'reactstrap';

var React = require('react');
const axios = require('axios');
var ReactDOM = require('react-dom');

class FlaggedWords extends React.Component {

    state = {
        word : "",
        meaning : "",
        revealMeaning : ""
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
                        meaning : meaning,
                        revealMeaning : ""
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

    openLearnWords = () => {
        this.props.history.push('/learn')
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
                    <Button className='btn-simple btn-round' color='info' onClick={this.openLearnWords.bind(this)}>Learn Words</Button>
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
                            <Button onClick={this.nextWord.bind(this)} color='primary'>Next Word</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div> 
        );
    }
}

export default FlaggedWords;

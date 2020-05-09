import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardFooter, CardHeader, Alert } from 'reactstrap';
import { faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import {faFlag} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var React = require('react');
const axios = require('axios');
var ReactDOM = require('react-dom');

class LearntWords extends React.Component {

    state = {
        word : "",
        meaning : "",
        learnt_words : undefined
    }

    componentDidMount = () => {
        var word, meaning, learnt_words = {}
        axios.get('/get-learnt-words')
             .then((result) => {

                if (!result.data.Success) {
                    alert("Cant get word dude :(");
                } else {
                    this.setState({
                        learnt_words : result.data.learnt_words
                    })
                }
             });
        

    }

    NotLearnt = (key) => {

        console.log(key, "is the word")
        var word, meaning
        axios.post('/not-learnt-word', {'word' : key})
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
        // document.getElementsByClassName('meaning-card')[0].style.visibility = 'hidden';
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
        const items = []
        var elements = this.state.learnt_words
        console.log(elements, "list of elements, typs is", typeof(elements))
        for ( let key in elements) {    
            items.push(
                <Card>
                    <CardBody>
                        <CardTitle>
                            {key}
                            <Button className='btn-simple btn-icon btn-round xButton' color='danger' onClick={() => this.NotLearnt(key)}><FontAwesomeIcon icon={faTimes}/></Button>
                        </CardTitle>
                        <CardText className="meaning">{elements[key]}</CardText>
                    </CardBody>
                </Card>
            )
        }

        return (
            <div>
                <div className="alerts" style={{visibility:"hidden"}} onClick={this.hideAlert.bind(this)}>
                    <Alert color='success'>The word has been marked as Not Learnt</Alert>
                </div>
                <div className="flagged-words">
                    <Button className='btn-simple btn-round' color='info' onClick={this.openLearnWords.bind(this)}>Learn Words</Button>
                </div>
                <div className="logout">
                    <Button className='btn-simple btn-round' color='info'  onClick={this.Logout.bind(this)}><FontAwesomeIcon icon={faSignOutAlt}/></Button>
                </div>
                <div className="learn-words">
                    <div>
                        {items}
                    </div>
                </div>
            </div> 
        );
    }
}

export default LearntWords;

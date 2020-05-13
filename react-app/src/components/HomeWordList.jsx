import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, CardBody, CardTitle, CardText } from 'reactstrap';
import{ Button, Modal, Progress, ModalBody, ModalFooter, Card, InputGroup, InputGroupAddon, InputGroupText, Form , Input, Alert} from 'reactstrap';
import { faUser, faEnvelope, faKey, faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GaugeChart from 'react-gauge-chart'

var axios = require('axios');

class HomeWordList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            word_list : {}
        };
    }

    componentDidMount = () => {

        this.getWordList();
    }

    getWordList = () => {
        axios.get('/get-word-list')
            .then((result) => {

            if (!result.data.Success) {
                this.setState({
                    word_list : {}
                });
            } else {
                this.setState({
                    word_list : result.data.word_list
                });
            }
            });
    }

    render(){
        const items = []
        var elements = this.state.word_list
        console.log(elements, "list of elements, typs is", typeof(elements))

        for ( let key in elements) {    
            items.push(
                <Card>
                    <CardBody>
                        <CardTitle>
                            {key}
                        </CardTitle>
                        <CardText className="meaning">{elements[key]}</CardText>
                    </CardBody>
                </Card>
            )
        }

        return(
            <div>
                {items}
            </div>
        );
    }
}

export default HomeWordList;
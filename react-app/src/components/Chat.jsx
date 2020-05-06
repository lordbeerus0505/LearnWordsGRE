
const axios = require('axios');
var React = require('react');


class Chat extends React.Component {

    componentDidMount = () => {
        console.log("logging on console")
        axios.get('/check_creds')
             .then((result) => {
                console.log("here we are")
                if (!result.data.Success) {
                    this.props.history.push('/auth/login');
                    alert("Unable to Login");
                } else {
                    this.props.history.push('/dashboard/');
                }
             });
    }
    render() {
        return (
            <div className="navbar">
                <p>This is the chat section dude</p>
            </div>
        );
    }
}

export default Chat;

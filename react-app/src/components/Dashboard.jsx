

var React = require('react');


class Dashboard extends React.Component {

    redirectToChat = () => {
        this.props.history.push('/chat');
    }

    render() {
        return (
            <div className="navbar">
                <button
                    type="button"
                    class="chatButton"
                    onClick={this.redirectToChat.bind(this)}
                >
                    Chat
                </button>
            </div>
        );
    }
}

export default Dashboard;

var React = require('react');

class Main extends React.Component {

    redirectToLogin = () => {
        this.props.history.push('/auth/login');
    }

    redirectToSignUp= () => {
        this.props.history.push('/auth/signup');
    }

    render() {
        return (
            <div className="navbar">
                <button
                    type="button"
                    class="primary button large login-button"
                    onClick={this.redirectToLogin.bind(this)}
                >
                    Login
                </button>
                {/* Move this into modal or whatevers */}
                <button
                    type="button"
                    class="primary button large login-button"
                    onClick={this.redirectToSignUp.bind(this)}
                >
                    SignUp
                </button>
            </div>
        );
    }
}

export default Main;

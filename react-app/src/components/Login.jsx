var React = require('react');
const axios = require('axios');

class Login extends React.Component {

    state = {
        mobileNumber: "",
        password: "",
    }

    onMobileChange = (mobileNumber) => {
        this.setState({
            mobileNumber: mobileNumber.target.value
        });
    }

    onPasswordChange = (password) => {
        this.setState({
            password: password.target.value
        });
    }

    openSignUp = () => {
        this.props.history.push('/auth/signup');
    }
    
    submitLoginForm = () => {

        axios.post('/login', this.state)
             .then((result) => {

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
            
            <div className="login-form">
                <form>
                    <label for="mobileNumber">Mobile Number:</label>
                    <br/>
                    <input type="text" id="mobileNumber" name="mobileNumber" onChange={this.onMobileChange.bind(this)} />
                    <br/>
                    <label for="pword">Password:</label>
                    <br/>
                    <input type="password" id="pword" name="pword" onChange={this.onPasswordChange.bind(this)} />
                    <br/>
                    <button
                        type="button"
                        class="primary button"
                        onClick={this.submitLoginForm.bind(this)}
                    >
                        Submit
                    </button>
                </form>
                <label for="signup" ></label>
                Don't have an account? Click here to<a onClick={this.openSignUp.bind(this)}> Sign Up</a>
            </div>
        );
    }
}

export default Login;

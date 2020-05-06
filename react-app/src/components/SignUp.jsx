var React = require('react');
const axios = require('axios');

class SignUp extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        userType: "client"
    }

    onFirstNameChange = (firstName) => {
        this.setState({
            firstName: firstName.target.value
        });
    }

    onLastNameChange = (lastName) => {
        this.setState({
            lastName: lastName.target.value
        });
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

    onConfirmPasswordChange = (confirmPassword) => {
        this.setState({
            confirmPassword: confirmPassword.target.value
        });
    }

    openLogin = () => {
        this.props.history.push('/auth/login');
    }

    submitSignUpForm = () => {

        if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match');
        } else {
            
            axios.post('/signup', this.state)
             .then((result) => {
                console.log("sent data")
                if (!result.data.Success) {
                    this.props.history.push('/');
                    alert("Unable to SignUp")
                } else {
                    this.props.history.push('/learn/');
                }
             });
        }
        
    }

    render() {
        return (
            <div className="login-form">
                <form>
                    <label for="firstName">First Name:</label>
                    <br/>
                    <input type="text" id="firstName" name="firstName" onChange={this.onFirstNameChange.bind(this)} />
                    <br/>
                    <label for="lastName">Last Name:</label>
                    <br/>
                    <input type="text" id="lastName" name="lastName" onChange={this.onLastNameChange.bind(this)} />
                    <br/>
                    <label for="mobileNumber">Mobile Number:</label>
                    <br/>
                    <input type="text" id="mobileNumber" name="mobileNumber" onChange={this.onMobileChange.bind(this)} />
                    <br/>
                    <label for="pword">Password:</label>
                    <br/>
                    <input type="password" id="pword" name="pword" onChange={this.onPasswordChange.bind(this)} />
                    <br/>
                    <label for="pword">Confirm Password:</label>
                    <br/>
                    <input type="password" id="cpword" name="cpword" onChange={this.onConfirmPasswordChange.bind(this)} />
                    <br/>
                    <button
                        type="button"
                        class="primary button"
                        onClick={this.submitSignUpForm.bind(this)}
                    >
                        Submit
                    </button>
                </form>
                <label for="signup" ></label>
                Already signed up?<a onClick={this.openLogin.bind(this)}> Login</a>
            </div>
        );
    }
}

export default SignUp;

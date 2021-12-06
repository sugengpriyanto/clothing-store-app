import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        console.log(this.state.email)
        console.log(this.state.password)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='Email' required type="email" onChange={this.handleEmail} value={this.state.email} />
                <input placeholder='Password' required type="password" onChange={this.handlePassword} value={this.state.password} />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login
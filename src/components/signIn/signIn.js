import React, { Component } from 'react';
import { FormInput, CustomButton } from '../';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signIn.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    render () {
        return (
            <div className='sign-in form-section'>
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton
                        type='submit'
                    >
                        Sign in
                    </CustomButton>

                    <CustomButton
                        onClick={signInWithGoogle}
                    >
                        Sign in with Google
                    </CustomButton>

                </form>
            </div>
        );
    }
}

export default SignIn;

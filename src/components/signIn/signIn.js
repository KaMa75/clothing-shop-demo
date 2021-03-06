import React, { Component } from 'react';
import { FormInput, CustomButton } from '../';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './signIn.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            });
        } catch(error) {
            console.log(error);
        }

    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    render () {
        const {email, password} = this.state;
        return (
            <div className='form-section'>
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />

                    <div className='form-buttons'>
                        <CustomButton
                            type='submit'
                        >
                            Sign in
                        </CustomButton>

                        <CustomButton
                            type='button'
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign in with Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;

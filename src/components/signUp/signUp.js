import React, { Component } from 'react';
import { FormInput, CustomButton } from '../';

import { auth, createUserProfileDocuemt, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signUp.scss';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} =  this.state;

        if(password !== confirmPassword) {
            alert("Passwords doesn't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='form-section'>
                <h2>I do not have an acount</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        label='Display Name'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />

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

                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />

                    <div className='form-buttons'>
                        <CustomButton
                            type='submit'
                        >
                            Sign up
                        </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignUp;

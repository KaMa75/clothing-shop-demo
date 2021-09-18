import React from 'react';
import { SignIn, SignUp } from '../../components';

import './signInPage.scss';

const SignInPage = () => {
    return (
        <div className='sign-in'>
            <SignIn />
            <SignUp />
        </div>
    );

}

export default SignInPage;

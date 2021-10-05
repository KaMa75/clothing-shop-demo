import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden, selectCurrentUser } from '../../redux';

import { auth } from '../../firebase/firebase.utils';

import { CartIcon } from '../cartIcon';
import { CartDropdown } from '../cartDropdown';

import { ReactComponent as Logo } from '../../assets/fashion-logo.svg';
import './header.scss';

const Header = ({currentUser, isHidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop' >
                    Shop
                </Link>
                <Link className='option' to='/contact' >
                    Contact
                </Link>
                {
                    currentUser ? (
                        <div
                            className='option'
                            onClick={() => auth.signOut()}
                        >
                            Sign Out
                        </div>
                    ) : (
                        <Link className='option' to='/signin' >
                            Sign In
                        </Link>
                    )
                }
                <div className='option'>
                    <CartIcon />
                </div>
            </div>
            {isHidden ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

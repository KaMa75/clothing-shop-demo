import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
                <CartIcon />
            </div>
            {isHidden ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    isHidden: state.cart.isHidden
});

export default connect(mapStateToProps)(Header);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { CartItem } from '../cartIcon';
import { ReactComponent as Logo } from '../../assets/fashion-logo.svg';
import './header.scss';
import CartIcon from '../cartIcon/cartIcon';

const Header = ({currentUser}) => {
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
                <Link className='option' to='/order' >
                    <CartIcon />
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);

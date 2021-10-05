import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux';

import { HomePage, HatsPage, ShopPage, SignInPage } from './pages';
import { Header } from './components';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';
import { Component } from 'react';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (

        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/hats' component={HatsPage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
          </Switch>
        </div>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

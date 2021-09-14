import { HomePage, HatsPage, ShopPage, SignInPage } from './pages';
import { Header } from './components';
import { Route, Switch } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import './App.scss';
import { Component } from 'react';

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='container'>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hats' component={HatsPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

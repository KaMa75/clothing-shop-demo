import { HomePage, HatsPage, ShopPage } from './pages';
import { Header } from './components';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='container'>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

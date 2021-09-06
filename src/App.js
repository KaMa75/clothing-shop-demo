import { HomePage, HatsPage, ShopPage } from './pages';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

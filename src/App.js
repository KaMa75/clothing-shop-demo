import { HomePage, HatsPage } from './pages';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

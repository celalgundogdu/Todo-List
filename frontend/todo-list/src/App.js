import { Route, Switch } from 'react-router-dom';
import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' render={props => (<ListTodo />)} />
      <Route exact path='/add' render={props => (<AddTodo />)} />
      <Route exact path='/update/:id' render={props => (<UpdateTodo {...props} />)} />
    </Switch>
  );
}

export default App
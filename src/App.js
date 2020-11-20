import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import CreateTask from './pages/createtask/createtask'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
              <Dashboard />
          </Route>
          <Route exact path="/create/task">
              <CreateTask />
          </Route>
        </Switch>
    </Router> 
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUpForm from './Components/SignUpForm/SignUpForm'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch >
          <Route path="/">
            <SignUpForm />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home'
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage'
import LoginForm from './Pages/LoginForm/LoginForm'
import SignUpForm from './Pages/SignUpForm/SignUpForm'
import SummaryPage from './Pages/SummaryPage/SummaryPage'
import ProductPage from './Pages/ProductPage/ProductPage'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        
        {/* <Switch >
          <Route exact path="/categories" component={CategoriesPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route path="/" component={Home} />
        </Switch> */}
        <ProductPage />
      </div>
    </Router>
    
  );
}

export default App;

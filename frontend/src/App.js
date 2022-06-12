import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home'
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/login'
function App() {
  return (
    <Router>
   <div className="App">
     <Navbar/>
     
      <Switch>
      <Route exact path="/">
            <Home/> 
       </Route>
       <Route path="/login">
            <Login/>
       </Route>
      </Switch>
     
   </div>
   </Router>
  );
}

export default App;

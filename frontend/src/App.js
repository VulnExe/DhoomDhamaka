import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home/home'
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login/login'
import Register from './components/Register/register'
import Account from './components/Myprofile/account';
import Events from './components/Events/events'
import Becomevendor from './components/BecomeVendor/becomevendor';
function App() {
  return (
    <Router>
   <div className="App">
     <Navbar/>
     
      <Switch>
      <Route exact path="/">
            <Home/> 
       </Route>
       <Route path="/events">
            <Events/> 
       </Route>
       <Route path="/login">
            <Login/>
       </Route>
       <Route path="/register">
            <Register/>
       </Route>
       <Route path="/becomevendor">
            <Becomevendor/>
       </Route>
       <Route path="/myacc">
            <Account/>
       </Route>

      </Switch>
     
   </div>
   </Router>
  );
}

export default App;

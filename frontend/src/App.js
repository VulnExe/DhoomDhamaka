import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home/home'
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login/login'
import Register from './components/Register/register'
import Account from './components/Myprofile/account';
import Events from './components/Event/events'
import Becomevendor from './components/BecomeVendor/becomevendor';
import Birthday from "./components/EventsPages/birthday"
import Babyshower from "./components/EventsPages/babyshower"
import Corporateevent from "./components/EventsPages/corporateevent"
import Engagement from "./components/EventsPages/engagement"
import Familyfunction from "./components/EventsPages/familyfunction"
import Postwedding from "./components/EventsPages/postwedding"
import Prewedding from "./components/EventsPages/prewedding"
import Wedding from "./components/EventsPages/wedding"


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
       <Route path="/birthday">
            <Birthday/>
       </Route>
       <Route path="/babyshower">
            <Babyshower/>
       </Route>
       <Route path="/corporateevent">
            <Corporateevent/>
       </Route>
       <Route path="/engagement">
            <Engagement/>
       </Route>
       <Route path="/familyfunction">
            <Familyfunction/>
       </Route>
       <Route path="/postwedding">
            <Postwedding/>
       </Route>
       <Route path="/prewedding">
            <Prewedding/>
       </Route>
       <Route path="/wedding">
            <Wedding/>
       </Route>
      </Switch>
     
   </div>
   </Router>
  );
}

export default App;

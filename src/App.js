import './App.css';
import Login from './Components/Login';
import Parent from './Components/Parent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetails from './Components/UserDetails';
import Firstname from './Components/Firstname';
import Otherdetails from './Components/Otherdetails';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Parent />
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>

        <Route  path="/signup/firstname">
          <Firstname></Firstname>
        </Route>

        <Route path="/signup/UserDetails">
          <UserDetails></UserDetails>
        </Route>

        <Route path="/signup/OtherDetails">
          <Otherdetails></Otherdetails>
        </Route>

        <Route path="/homepage">
          <Home></Home>
        </Route>
        </Switch>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

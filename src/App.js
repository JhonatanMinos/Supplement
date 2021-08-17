import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import Category from './pages/Category';
import Trademarks from './pages/Trademarks';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Category" component={Category}/>
        <Route path="/Trademarks" component={Trademarks}/>
        <Route path="/Shop" exact component={Shop}/>
      </Switch>
    </Router>
  );
}

export default App;

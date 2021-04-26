import logo from "./logo.svg";
import "./App.css";
import { Button, Calendar } from "antd";
import Header from "./header/container/header";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Rite from "./rite/container/rite";
import Reading from "./reading/container/reading";
import HeaderBar from "./header/container/header";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBar></HeaderBar>
        <Switch>
          <Route exact path="/" component={Reading}></Route>
          <Route exact path="/rite" component={Rite}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

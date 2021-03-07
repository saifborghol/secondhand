import "../styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form}></Route>
        <Route exact path="/table" component={Table}></Route>
      </Switch>
    </Router>
  );
}

export default App;

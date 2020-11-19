import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/simple-login" component={LoginForm} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

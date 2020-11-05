import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Saved} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

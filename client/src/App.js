import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Card from "react-bootstrap/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Card className="text-center">
          <Card.Header as="h3">Google Books Search</Card.Header>
          <Card.Body>Search for and save books of interest</Card.Body>
        </Card>
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

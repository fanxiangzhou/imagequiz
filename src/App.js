import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import { Container} from 'react-bootstrap';

function App() {
  return (
    <HashRouter>
      <Container fluid>
      
      <NavigationBar/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
      
      </Container>

    </HashRouter>

  );
}

export default App;

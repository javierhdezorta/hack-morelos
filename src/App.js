import logo from './logo.svg';
import './App.css';
import Login from './views/Login'
import Welcome from './views/Welcome'
import ConjuntoManual from './views/ConjuntoManual'
import ConjuntoUbicacion from './views/ConjuntoUbicacion'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return  (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/conjuntoManual" exact>
            <ConjuntoManual />
          </Route>
          <Route path="/conjuntoUbicacion" exact>
            <ConjuntoUbicacion />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

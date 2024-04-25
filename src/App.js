import './App.css';
import HomeScreen from './Containers/screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
          <Switch>
          <Route path="/">
            <HomeScreen />  
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;

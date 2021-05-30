import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import OurMissionPage from './Components/OurMissionPage/OurMissionPage';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/our-mission" exact render={() => <OurMissionPage />} />
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import OurMissionPage from './Components/OurMissionPage/OurMissionPage';
import ShopPage from './Components/ShopPage/ShopPage';
import ContactPage from './Components/ContactPage/ContactPage';
import SiteNavbar from './Components/SiteNavbar/SiteNavbar';

function App() {

  return (
    <div className="App">
      <SiteNavbar />
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/our-mission" exact render={() => <OurMissionPage />} />
        <Route path="/shop" exact render={() => <ShopPage />} />
        <Route path="/contact" exact render={() => <ContactPage />} />
      </Switch>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LandingPage from './components/LandingPage'
import * as sessionActions from "./store/session";
import HauntPage from "./components/HauntPage";
import Listings from "./components/Listings";
import HauntsList from "./components/HauntsList";
import Trips from "./components/Trips";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>           
            <Route path="/signup" >
              <SignupFormPage userTypeId="1" />
            </Route>
            <Route path="/host/signup" >
              <SignupFormPage userTypeId="2" />
            </Route>
            <Route exact path='/haunts/:hauntId'>
              <HauntPage />
            </Route>
            <Route exact path='/haunts'>
              <HauntsList />
            </Route>
            <Route path='/listings/:userId'>
              <Listings />
            </Route>
            <Route path='/trips/:userId'>
              <Trips />
            </Route>
          </Switch>
        )}
      </>
  );
}

export default App;

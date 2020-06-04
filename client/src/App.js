import React from "react";
import Album from '../src/components/Album';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Saved from "./pages/Saved";

function App() {
    return (
      <div>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Album />
                  </Route>
                  <Route path="/saved">
                      <Saved />
                  </Route>
              </Switch>
          </Router>
      </div>
    );
}

export default App;

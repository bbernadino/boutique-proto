import React from "react";
import { Switch, Route } from "react-router-dom";

//layouts
import MainLayout from "./layouts/mainLayout";

// pages
import Homepage from "./pages/Homepage/homepage";
import Registration from "./pages/Registration/registration";

import "./default.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

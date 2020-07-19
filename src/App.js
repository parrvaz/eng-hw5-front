import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Forms from "./components/forms";
import FormDetails from "./components/formDetails";
import "./App.css";
import "antd/dist/antd.css";
require("dotenv").config();

class App extends Component {
  render() {
    console.log(process.env.PORT);
    return (
      <div>
        <div className="content">
          <Switch>
            <Route path="/api/forms/:id" component={FormDetails} />
            <Route path="/api/forms" render={(props) => <Forms {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

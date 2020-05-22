import React, { Component } from "react";
import { Person } from "./models/person";
import { SWAPIPeopleUI } from "./components/PersonCardSection";
import { VerticalStackConfigureExample } from "./components/Example";

interface State {
  persons: Person[];
}

class App extends Component<{}, State> {

  render() {
    const isDev = new URLSearchParams(window.location.search)?.get('dev')?.localeCompare("true")===0;
    if(isDev)
    {
      return (
        <div>
          <VerticalStackConfigureExample/>
        </div>
      );
    }
    else {
      return (
        <div>
        <SWAPIPeopleUI/>
        </div>
      );
    }

  }
}

export default App;


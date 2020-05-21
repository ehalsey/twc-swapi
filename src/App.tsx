import React, { Component } from "react";
import { Person } from "./models/person";
import { StackOptions, SWAPIPeopleUI } from "./components/PersonCardSection";
import { wapi } from "./services/wapi";
import { VerticalStackConfigureExample } from "./components/Example";

interface State {
  persons: Person[];
  options: StackOptions;
}

class App extends Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
  }  

  render() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let isDev = params.get('dev')?.localeCompare("true")===0;
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


import React, { Component } from "react";
import { Person } from "./models/person";
import { PersonCardSection } from "./components/PersonCardSection";
import { wapi } from "./services/wapi";

interface State {
  persons: Person[];
}

class App extends Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { persons: [] };
  }  

  render() {
    return (
      <div>
        <PersonCardSection persons={this.state.persons} onDelete={this.deletePerson}/>
      </div>
    );
  }

  async componentDidMount() {
    this.setState({ persons: await wapi.getAllPeople() })
  }

  private deletePerson = () => {
  };

}

export default App;


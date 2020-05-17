import React, { Component } from "react";
import { People } from "./models/person";

interface State {
  people: People;
}

class App extends Component<{}, State> {
  state = {people:{count:1,next:'100',previous:'',results:[]}}
  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
      </div>
    );
  }
}

export default App;

function getstate(): People {
  return {
    "count": 82,
    "next": "http://swapi.dev/api/people/?page=2",
    "previous": null,
    "results": [
      {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "http://swapi.dev/api/vehicles/14/",
          "http://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "http://swapi.dev/api/people/1/"
      },
      {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/4/",
          "http://swapi.dev/api/films/5/",
          "http://swapi.dev/api/films/6/"
        ],
        "species": [
          "http://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "http://swapi.dev/api/people/2/"
      }
    ]
  }
}
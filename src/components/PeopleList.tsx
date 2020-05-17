import React, { FunctionComponent } from "react";

import { Person, People } from "../models/person";
import { PeopleListItem } from "./PeopleListItem";

interface Props {
  people: People;
  onDelete: (person: Person) => void;
}

export const PeopleList: FunctionComponent<Props> = ({ people, onDelete }) => (
  <ul>
    {people.results.map(person => (
      <PeopleListItem person={person} onDelete={onDelete} />
    ))}
  </ul>
);
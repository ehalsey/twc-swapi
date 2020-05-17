import React, { FunctionComponent } from "react";

import { Person } from "../models/person";
import { PersonListItem } from "./PersonListItem";

interface Props {
  persons: Person[];
  onDelete: (person: Person) => void;
}

export const PersonList: FunctionComponent<Props> = ({ persons, onDelete }) => (
  <ul>
    {persons.map(person => (
      <PersonListItem person={person} onDelete={onDelete} />
    ))}
  </ul>
);
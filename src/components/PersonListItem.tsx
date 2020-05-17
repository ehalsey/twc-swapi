import React, { FunctionComponent } from "react";

import { Person } from "../models/person";

interface Props {
  person: Person;
  onDelete: (person: Person) => void;
}

export const PersonListItem: FunctionComponent<Props> = ({ person, onDelete }) => {
    const onClick = () => {
        onDelete(person);
      };
  return (
    <li key={person.id.toString()}>
      {person.name} <button onClick={onClick}>X</button>
    </li>
  );
};
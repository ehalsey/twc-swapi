import React, { FunctionComponent } from "react";

import { Person } from "../models/person";

interface Props {
  person: Person;
  onDelete: (task: Person) => void;
}

export const PeopleListItem: FunctionComponent<Props> = ({ person, onDelete }) => {
    const onClick = () => {
        onDelete(person);
      };
  return (
    <li>
      {person.name} <button onClick={onClick}>X</button>
    </li>
  );
};
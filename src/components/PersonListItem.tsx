import React, { FunctionComponent } from "react";
import { Label } from '@fluentui/react';

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
      <Label>{person.name}</Label>
    </li>
  );
};
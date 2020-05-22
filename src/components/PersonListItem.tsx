import React, { FunctionComponent } from "react";
import { Label } from '@fluentui/react';

import { Person } from "../models/person";

interface Props {
  person: Person;
  onDelete: (person: Person) => void;
}

export const PersonListItem: FunctionComponent<Props> = ({ person, onDelete }) => {
  return (
    <li key={person.url}>
      <Label>{person.name}</Label>
    </li>
  );
};
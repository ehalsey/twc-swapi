import React, { FunctionComponent } from 'react';
import { Text, initializeIcons, Label } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Person } from "../models/person";
import { PersonListItem } from "./PersonListItem";

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10vh 0',
};

const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4'
}

const styles = {
    cardStyles: {
        root: {
            background: 'white',
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: '90%',
            margin: 'auto',
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    name: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
    physical: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
        }
    }
};



interface Props {
    persons: Person[];
    onDelete: (person: Person) => void;
}

export const PersonCardSection: FunctionComponent<Props> = ({ persons, onDelete }) => (
    <div style={container}>
        {persons.map((person) => (
            <div className="s-Grid-col ms-sm3 ms-xl3">
                <Card styles={styles.cardStyles}>
                    <Card.Section>
                        <Card.Item>
                            <Text styles={styles.name}>{person.name}</Text>
                        </Card.Item>
                        <Card.Item>
                            <Label>Date of Birth</Label>
                            <Text>{person.birth_year}</Text>
                        </Card.Item>
                        <Card.Item>
                            <Text>
                                Hair: {person.hair_color} Eyes: {person.eye_color}
                            </Text>
                        </Card.Item>
                    </Card.Section>
                </Card>
            </div>
        ))}
    </div>
);
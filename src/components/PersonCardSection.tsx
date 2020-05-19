import React, { FunctionComponent } from 'react';
import { Text, Label, Stack, IStackTokens, IStackStyles, DefaultPalette } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Person } from "../models/person";

const styles = {
    cardStyles: {
        root: {
            background: 'white',
            padding: 10,
            borderTop: '5px solid #0078d4',
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


// Mutating styles definition
const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.themeDark
    },
};

const peopleStackTokens: IStackTokens = { padding:20, childrenGap: 20 };

export const PersonCardSection: FunctionComponent<Props> = ({ persons }) => (



    <Stack  styles={stackStyles} tokens={peopleStackTokens}>
        {persons.map((person) => (
            <Card styles={styles.cardStyles} key={person.url}>
                <Card.Section>
                    <Card.Item>
                        <Text styles={styles.name}>{person.name}</Text>
                    </Card.Item>
                    </Card.Section>
                    <Card.Section>
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
        ))}
    </Stack>
);
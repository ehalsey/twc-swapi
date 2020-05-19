import React, { FunctionComponent } from 'react';
import { Text, Label, Stack, IStackTokens, IStackStyles, DefaultPalette } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Person } from "../models/person";

const container = {
    paddingBottom: 10,
    paddingTop:10
};


const styles = {
    cardStyles: {
        paddingBottom: '10px',
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

const sectionStackTokens: IStackTokens = { childrenGap: 10 };

interface Props {
    persons: Person[];
    onDelete: (person: Person) => void;
}


// Mutating styles definition
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary,
    height: 420,
  },
};

const itemStyles: React.CSSProperties = {
    alignItems: 'center',
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    width: 50,
  };

  const wrapStackTokens: IStackTokens = { childrenGap: 20 };

export const PersonCardSection: FunctionComponent<Props> = ({ persons }) => (


  
    <Stack wrap styles={stackStyles} tokens={wrapStackTokens}>
        {persons.map((person) => (
                <Card styles={styles.cardStyles}  key={person.url}>
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
        ))}
    </Stack>
);
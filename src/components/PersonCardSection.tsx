import React, { FunctionComponent } from 'react';
import { Text, Label, Stack, IStackTokens, IStackStyles, DefaultPalette, IStackProps } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Person } from "../models/person";
import { wapi } from '../services/wapi';

const styles = {
    cardStyles: {
        root: {
            background: 'white',
            padding: 10,
            borderTop: '5px solid #0078d4',
            margin: 'auto',
            height: 'auto'
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

export interface StackOptions {
    numItems: number;
    showBoxShadow: boolean;
    preventOverflow: boolean;
    disableShrink: boolean;
    wrap: boolean;
    stackHeight: number;
    autoHeight: boolean;
    childrenGap: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    verticalAlignment: IStackProps['verticalAlign'];
    horizontalAlignment: IStackProps['horizontalAlign'];
  }

interface IPersonCardSectionProps {
    options: StackOptions;
    numberOfPeople: number;
    persons: Person[];
}


// Mutating styles definition
const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.themeDark,
        height: '20%'
    },
};

const peopleStackTokens: IStackTokens = { padding:20, childrenGap: 20 };

export class SWAPIPeopleUI extends React.Component<{}, IPersonCardSectionProps> {
    opts: StackOptions = {
        numItems: 5,
        showBoxShadow: false,
        preventOverflow: false,
        disableShrink: true,
        wrap: true,
        stackHeight: 200,
        autoHeight: true,
        childrenGap: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        verticalAlignment: 'start',
        horizontalAlignment: 'start',
      };

      public state: IPersonCardSectionProps = {
          numberOfPeople: 10, persons: [], options: this.opts };

    public render(): JSX.Element{
        return (
            <PersonCardSection {...this.state} /> 
        )
    }
   
  async componentDidMount() {
    this.setState({ persons: await wapi.getAllPeople() })
  }
}

const PersonCardSection: FunctionComponent<IPersonCardSectionProps> = props => {
    const {options, numberOfPeople, persons} = props;
    return (
    <Stack wrap={options.wrap} styles={stackStyles} tokens={peopleStackTokens} >
        {persons.map((person) => (
            <Card styles={styles.cardStyles} key={person.url}>
                <Card.Section grow>
                    <Card.Item>
                        <Text styles={styles.name}>{person.name}</Text>
                    </Card.Item>
                    </Card.Section>
                    <Card.Section grow>
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
    )
};
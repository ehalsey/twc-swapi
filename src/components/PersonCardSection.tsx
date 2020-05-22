import React, { FunctionComponent } from 'react';
import { Text, Label, Stack, IStackTokens, IStackStyles, DefaultPalette, Slider } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Person } from "../models/person";
import { wapi } from '../services/wapi';

interface IPersonCardSectionProps {
    numberOfPeople: number;
    persons: Person[];
    getSomePeople?: () => Person[];
}

export class SWAPIPeopleUI extends React.Component<{}, IPersonCardSectionProps> {
    public state: IPersonCardSectionProps = {
        numberOfPeople: 10, persons: []
    };

    private _onNumItemsChange = async (value: number): Promise<void> => {
        this.setState({ numberOfPeople: value })
    };

    public render(): JSX.Element {

        const sectionStackTokens: IStackTokens = { padding: 20, childrenGap: 10 };
        const configureStackTokens: IStackTokens = { padding: 20, childrenGap: 20 };

        return (
            <Stack tokens={sectionStackTokens}>
                <Stack horizontal tokens={configureStackTokens}>
                    <Stack.Item grow>
                        <Stack>
                            <Slider
                                label="Number of characters:"
                                min={1}
                                max={10}
                                step={1}
                                defaultValue={10}
                                showValue={true}
                                onChange={this._onNumItemsChange}
                            />
                        </Stack>
                    </Stack.Item>
                </Stack>
                <PersonCardSection {...this.state} />
            </Stack>
        )
    }

    async componentDidMount() {
        this.setState({ persons: await wapi.getAllPeople(), getSomePeople: () => _range(this.state) })
    }
}

function _range(state: IPersonCardSectionProps): Person[] {
    const result = [];
    for (let i = 0; i <= state.numberOfPeople - 1; i++) {
        result.push(state.persons[i]);
    }
    return result;
}

const PersonCardSection: FunctionComponent<IPersonCardSectionProps> = props => {
    const { getSomePeople = () => [] } = props;
    const stackTokens: IStackTokens = { padding: 20, childrenGap: 20 };
    const stackStyles: IStackStyles = {
        root: {
            background: DefaultPalette.themeDark,
            overflow: 'auto'
        },
    };    
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
    return (
        <Stack wrap={true} styles={stackStyles} tokens={stackTokens} >
            {getSomePeople().map((person) => (
                <Stack key={person.url}>
                <Card styles={styles.cardStyles}>
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
                </Stack>
            ))}
        </Stack>
    )
};
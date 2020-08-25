import React, {Component} from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import Ship from './Ship.jsx';
import CompareButton from "./CompareButton";
import Compare from "./Compare";
import ComparedCharacteristics from "./ComparedCharacteristics";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [],
            compareShips: [],
            pilots: [],
            visible: true,
            name: '',
        }
    }

    async componentDidMount() {
        await axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                const ships = response.data.results;
                const pilots = response.data.results.map(data => data.pilots);
                this.setState({ships, pilots})
            })
    }

    handlerChange = (e, model) => {
        e.preventDefault();
        
        const chosenShip = this.state.ships.filter(ship => ship.model === model);
        this.setState((state) => {
            const compareShips = [...new Set([...state.compareShips, ...chosenShip])];
            return {
                compareShips,
            }
        });
    }

    handleVisible = (event) => {
        event.preventDefault();
        this.setState(state => ({visible: !state.visible}));
    }

    clearCompare = () => {
        this.setState({
            compareShips: [],
            visible: true
        });
    }

    calculateCharacteristics = ([data1, data2]) => {
        const result = {};
        for (const [key, value] of Object.entries(data1)) {
            let valueShip1 = value;
            let valueShip2 = data2[key];
            if (valueShip1.includes(',')) {
                valueShip1 = valueShip1.replace(',', '');
            }
            if (valueShip2.includes(',')) {
                valueShip2 = valueShip2.replace(',', '');
            }
            if (!isNaN(Number(valueShip1))) {
                result[key] = valueShip1 - valueShip2;
            }
        }
        localStorage.setItem('ComparedShips', JSON.stringify([data1, data2]));
        return result;
    }

    render() {
        const {ships, check, compareShips, pilots, visible} = this.state;
        return (
            <div>
                <div className="d-flex justify-content-between bd-highlight d-inline-flex flex-wrap">
                    {visible ?
                        ships.map((ship, index) => <Ship
                                handleCompare={this.handlerChange}
                                key={`${ship.name}-${index}`}
                                check={check}
                                id={uuid()}
                                name={ship.name}
                                model={ship.model}
                                starship_class={ship.starship_class}
                                manufacturer={ship.manufacturer}
                                cost_in_credits={ship.cost_in_credits}
                                length={ship.length}
                                crew={ship.crew}
                                passengers={ship.passengers}
                                max_atmosphering_speed={ship.max_atmosphering_speed}
                                hyperdrive_rating={ship.hyperdrive_rating}
                                MGLT={ship.MGLT}
                                cargo_capacity={ship.cargo_capacity}
                                consumables={ship.consumables}
                                films={ship.films}
                                pilots={ship.pilots.map(pilot => pilot.pilots)}
                                url={ship.url}
                                created={ship.created}
                                edited={ship.edited}
                            />
                        ) : <>
                            <Compare compareShips={compareShips}/>
                            <ComparedCharacteristics
                                compareShips={this.calculateCharacteristics(compareShips)}
                                clearCompare={this.clearCompare}
                            />
                        </>
                    }
                </div>
                {(compareShips.length > 1) ?
                    <CompareButton compareShips={compareShips} handleVisible={this.handleVisible}/> : null}
            </div>
        );
    }
}

export default MainPage;
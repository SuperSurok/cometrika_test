import React, {Component} from 'react';
import Ship from "./Ship";
import uuid from "react-uuid";

class Compare extends Component {
    render() {
        const { check, compareShips } = this.props;
        return (
            <div className="compare">
                {compareShips.map((ship, index) => {
                    const lengthShip = parseFloat(ship.length.replace(',', ''));
                    const passengers = parseFloat(ship.passengers.replace(',', ''));
                    const crew = parseFloat(ship.crew.replace(',', ''));
                    const maxSpeed = ship.max_atmosphering_speed.includes('km') ? ship.max_atmosphering_speed.replace('km', '') : ship.max_atmosphering_speed;
                    return (<Ship
                        handleCompare={this.handlerChange}
                        key={`${ship.name}-${index}`}
                        check={check}
                        id={uuid}
                        name={ship.name}
                        model={ship.model}
                        starship_class={ship.starship_class}
                        manufacturer={ship.manufacturer}
                        cost_in_credits={ship.cost_in_credits}
                        length={lengthShip}
                        crew={crew}
                        passengers={passengers}
                        max_atmosphering_speed={maxSpeed}
                        hyperdrive_rating={ship.hyperdrive_rating}
                        MGLT={ship.MGLT}
                        cargo_capacity={ship.cargo_capacity}
                        consumables={ship.consumables}
                        films={ship.films}
                        pilots={ship.pilots.map(pilot => pilot.pilots)}
                        url={ship.url}
                        created={ship.created}
                        edited={ship.edited}
                    />)
                })}
            </div>
        );
    }
}

export default Compare;
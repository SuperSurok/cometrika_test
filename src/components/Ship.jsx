import React, {Component} from 'react';

class Ship extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            check,
            id,
            name,
            model,
            starship_class,
            manufacturer,
            cost_in_credits,
            length,
            crew,
            passengers,
            max_atmosphering_speed,
            hyperdrive_rating,
            MGLT,
            cargo_capacity,
            consumables,
            films,
            pilots,
            url,
            created,
            edited,
            handleCompare
        } = this.props;
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
        const formatDate = (date) => (
            new Date(date).toLocaleString('en-US', dateOptions)
        )

        return (
            <div id={`${id}`} className="ship pb-3 d-flex flex-column">
                <div className="ship-name">
                    <div className="block-ui">
                        <h6>Ship Name</h6>
                        <p>{name}</p>
                    </div>
                </div>
                <div className="ship-ch d-flex flex-row">
                    <div
                        className="block-ui btn-group-toggle" data-toggle="buttons"
                    >
                        <label id={model} className="">
                            <input
                                label={model}
                                onChange={(e) => handleCompare(e, model)}
                                name={model}
                                checked={check}
                                type="checkbox"/> Add to Compare
                        </label>
                    </div>
                    <div className="block-ui">
                        <h6>Ship Model</h6>
                        <p>{model}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Ship Class</h6>
                        <p>{starship_class}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Manufacturer</h6>
                        <p>{manufacturer}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Cost in Credits</h6>
                        <p>{cost_in_credits}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Length</h6>
                        <p>{length}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Crew</h6>
                        <p>{crew}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Passengers</h6>
                        <p>{`${passengers}`}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Max Atmosphering Speed</h6>
                        <p>{max_atmosphering_speed}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Hyperdrive Rating</h6>
                        <p>{hyperdrive_rating}</p>
                    </div>
                    <div className="block-ui">
                        <h6>MGLT</h6>
                        <p>{MGLT}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Cargo Capacity</h6>
                        <p>{cargo_capacity}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Consumables</h6>
                        <p>{consumables}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Films</h6>
                        <p><a href={films}>Link to Film</a></p>
                    </div>
                    <div className="block-ui">
                        <h6>Pilots</h6>
                        <div>{pilots.length > 0 ?
                            // Need to rework
                            pilots.map(item => {
                                return (
                                    <a href={`${item}`}>Link to Pilot</a>
                                )
                            }) : pilots.length}</div>
                    </div>
                    <div className="block-ui">
                        <h6>Url</h6>
                        <p><a href={url}>Link to Url</a></p>
                    </div>
                    <div className="block-ui">
                        <h6>Created</h6>
                        <p>{formatDate(created)}</p>
                    </div>
                    <div className="block-ui">
                        <h6>Edited</h6>
                        <p>{formatDate(edited)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ship;
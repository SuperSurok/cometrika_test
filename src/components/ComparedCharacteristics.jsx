import React from 'react';
import uuid from 'react-uuid';

import ClearButton from './ClearButton';

function ComparedCharacteristics({...props}) {
    const data = Object.entries(props.compareShips).map(item => {
        return (
            <div key={uuid()} className="block-ui">
                <h6>{item[0].replace('_', ' ')}</h6>
                <p>{(isNaN(item[1]) ? 'Not compared' : item[1])}</p>
            </div>
        )
    })

    return (
        <div className="compare-ch">
            <h4>Compare Characteristics</h4>
            <div className="ship pb-3 d-flex flex-column">
                <div className="ship-ch d-flex flex-row">
                    {data}
                </div>
            </div>
            <ClearButton clearCompare={props.clearCompare}/>
        </div>
    );
}

export default ComparedCharacteristics;
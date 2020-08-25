import React from 'react';

function ClearButton({...props}) {
    return (
        <button
            onClick={props.clearCompare}
            type='button' className='bth btn-primary p-2 m-2'>
            Clear Compare Ships Button
        </button>
    );
}

export default ClearButton;
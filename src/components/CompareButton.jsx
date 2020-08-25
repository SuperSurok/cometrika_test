import React from 'react';

const CompareButton = ({...props}) => {
    return (
        <div>
            <button
                onClick={props.handleVisible}
                type='button' className='bth btn-primary p-2 m-2'>
                Compare Ships Button
            </button>
        </div>
    );
};

export default CompareButton;
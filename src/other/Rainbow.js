import React from 'react';

function getRandomColor() {
    const colours = ['red', 'green', 'purple', 'yellow', 'orange', 'blue'];
    return colours[Math.floor(Math.random() * 6)] + '-text';
}

const Rainbow = (WrappedComponent) => {
    
    return (props) => (
        <div className={getRandomColor()}>
            <WrappedComponent {...props} />
        </div>
    );

};

export default Rainbow;

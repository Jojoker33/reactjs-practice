import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    const name = 'traveler';
    /*
    return (
        <>
            <div>
                <h1> HI {name.toLocaleUpperCase()} !</h1>
            </div>
            <div>
                <p> this a good exampple of sending 2 components in react </p>
            </div>
        </>
    );
    */

    // What is inside the ()
    return React.createElement('div', null,
        React.createElement('h1', null,
            'Hi ', name.toLocaleUpperCase(), ' !'
        )

    );
}

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
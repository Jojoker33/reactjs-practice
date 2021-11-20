import React from 'react';
import ReactDOM from 'react-dom';

function CustomExample() {
    return (
        <>
            <span> this an example of custom component</span>
            <ComplexElt subject='JSX' />
        </>);
}

function ComplexElt(subject) {
    console.log(subject);
    return React.createElement('div', { style: { color: 'green' } }, `The subject of this part is ${subject.subject}`);
}

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
        ),
        React.createElement(CustomExample)
    );
}

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
import React, {useState} from 'react';
import {render} from 'react-dom';
import "styles.css";
const App = () => {
    const [count, setCount] = useState(0);
    return(
        <React.Fragment>
            <h1>Becky Style App</h1>
            <span>
            <h2>Current Count: {count}</h2>
            </span>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(count - 1)}>Decrement Count</button>
            <button onclick={() => setCount(0)}>Clear Count</button>
        </React.Fragment>
    );
}

render (<App/>, document.getElementById('root'));

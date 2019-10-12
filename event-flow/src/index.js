
import React from 'react';
import { withScreenSize } from '@vx/responsive';
import ReactDOM from 'react-dom';
import { App } from '@data-ui/event-flow';
import sampleEvents from '@data-ui/event-flow/build/sampleEvents';

// forms require this import
import '@data-ui/forms/build/react-select.min.css';

// import readme from '../../node_modules/@data-ui/event-flow/README.md';

const ResponsiveVis = withScreenSize(({ screenWidth, screenHeight, ...rest }) => (
    <App width={1000} height={1000} {...rest} />
));


export default {
    // usage: readme,
    // one example per dataset
    examples: Object.keys(sampleEvents).map(name => {
        const dataset = sampleEvents[name];

        return {
            description: name,
            example: () => <ResponsiveVis data={dataset.allEvents} />,
        };
    }),
};

// Example of how to render Hello:
const Apple = () => {
    return(
        <h1>Hello</h1>
    )
};

ReactDOM.render(<App /* to render hello: <Apple */ />, document.querySelector('#root'));

import React from 'react';
import { withScreenSize } from '@vx/responsive';
import ReactDOM from 'react-dom';
import { App } from '@data-ui/event-flow';
import sampleEvents from '@data-ui/event-flow/build/sampleEvents';

// forms require this import
// import '@data-ui/forms/build/react-select.min.css';


// It might be that this is all that is needed to render event-flow :O
const ResponsiveVis = withScreenSize(({ screenWidth, screenHeight, ...rest }) => (
    <App width={screenWidth * 0.9} height={screenHeight * 0.9} {...rest} />
));


// The data set might need to be altered.
// this snippet seems to delegate different data sets for thew different examples, but we are only
// trying to render one. This might create errors. (we have no var named example)

export default {
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

// example of rendering the app:
ReactDOM.render(<App /* to render hello: <Apple */ />, document.querySelector('#root'));
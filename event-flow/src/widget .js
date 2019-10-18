import * as React from 'react';

import { Widget } from '@phosphor/widgets';
import { ReactWidget } from '@jupyterlab/apputils';

import { EventFlowExample } from 'index.js'

require.undef('eventflow_widget');


define('eventflow_widget', ["@jupyter-widgets/base"], function(widgets) {
    var EventFlowView = widgets.DOMWidgetView.extend({

        render(){
            this.event_input = document.createElement('input');
            this.event.type = 'eventflow'
            this.event_input.value = this.model.get('value');
            this.event_input.disabled = this.model.get('disabled');

            this.el.appendChild(this.event_input);
        }
    });

    return {
        EventFlowView
    }
});



// function MyComponent() {
//     return <div>My Widget</div>;
//   }
//   class MyWidget extends ReactWidget {
//     render() {
//       return <EventFlowExample />;
//     }
//   }
//   const myWidget = new MyWidget();

  

import { DOMWidgetModel } from '@jupyter-widgets/base';
let _ = require('loadsh')

export class EventFlowModel extends DOMWidgetModel ({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'EventFlowModel',
        _view_name: 'EventFlow',
        _model_module: 'nav_event_flow',
        _view_module: 'nav_event_flow',
        _model_module_version: '0.1.0',
        _view_module_version: '0.1.0',
        value: [{ from: 'a', to: 'b', value: 31 }]
    })
  })


{

}
from traitlets import Unicode, Bool, validate, TraitError
from ipywidgets import DOMWidget, register


@register
class EventFlow(DOMWidget):
    _view_name = Unicode('EvenFlowView').tag(sync=True)
    _view_module = Unicode('evenflow_widget').tag(sync=True)
    _view_module_version = Unicode('0.0.1').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)


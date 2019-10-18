from ._version import version_info, __version__

from ._main import *


def _jupyter_nbextension_paths():
    return [
        {
            "section": "notebook",
            "src": "static",
            "dest": "nav-event-flow",
            "require": "nav-event-flow/extension",
        }
    ]

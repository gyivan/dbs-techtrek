from flask import Blueprint; 

from controllers.getClaims import getClaims; 


getClaimsRoute = Blueprint('getClaims', __name__)


getClaimsRoute.route('/', strict_slashes=False, methods=['GET', 'POST'])(getClaims)

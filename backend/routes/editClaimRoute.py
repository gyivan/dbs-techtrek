from flask import Blueprint

from controllers.editClaimController import editClaim; 

editClaimRoute = Blueprint('', __name__); 


editClaimRoute.route('/editClaim', strict_slashes=False,
                methods=['PUT'])(editClaim)
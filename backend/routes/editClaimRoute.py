from flask import Blueprint

from controllers.editClaimController import editClaim,getPoliciesByUser; 

editClaimRoute = Blueprint('', __name__); 


editClaimRoute.route('/editClaim', strict_slashes=False,
                methods=['PUT'])(editClaim)

editClaimRoute.route('/getPoliciesByUser', strict_slashes=False,
                methods=['POST'])(getPoliciesByUser)
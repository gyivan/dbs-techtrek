from flask import Blueprint; 

from controllers.deleteClaimController import deleteClaim; 


deleteClaimRoute = Blueprint('delete_claim', __name__)


deleteClaimRoute.route('/user/<int:claimID>', strict_slashes=False, methods=['POST', 'DELETE'])(deleteClaim)
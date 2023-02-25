from flask import Blueprint; 

from controllers.deleteClaimController import deleteClaimById; 


deleteClaimRoute = Blueprint('delete_claim', __name__)


deleteClaimRoute.route('/deleteClaim/<int:claimID>', strict_slashes=False, methods=['DELETE', 'POST'])(deleteClaimById)
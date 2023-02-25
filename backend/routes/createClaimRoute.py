from flask import Blueprint

from controllers.createClaimController import createClaim

createClaimRoute = Blueprint('createClaim', __name__)


createClaimRoute.route('/user', strict_slashes=False,
                  methods=['POST'])(createClaim)


# transactionRoute.route('/user', strict_slashes=False,
#                   methods=['POST'])(getTransaction)
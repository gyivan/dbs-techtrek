from flask_cors import CORS;
from flask import Flask; 
from utils.dbConfig import db; 
from flask_jwt_extended import JWTManager; 
import os; 

#--------AUTH----------------------------
from routes.authRoute import authRoute; 
from routes.editClaimRoute import editClaimRoute; 
from routes.createClaimRoute import createClaimRoute; 

# <REMOVE THE WHEN USING THIS AS A TEMPLATE>---------------------------------------------------------
# from routes.exchangeRateRoute import exchangeRateRoute; 
# from routes.walletRoute import walletRoute; 
# from routes.transactionRoute import transactionRoute; 
#-------------------------------------------------------------------

application = app =  Flask(__name__)
# Load app configurations--------------------------------------------------------------------------------------------------------------------------------------

application.config.from_object('config')
# Allow CORS requests to this API-----------------------------------------------------------------------------------------------------------------------------
# allow method , origins , methods are * 
CORS(application)

#register app into JWT manager 
jwt = JWTManager(application)

# Register SQL Alchemy------------------------------------------------------------------------------------------------------------------------------------
db.init_app(application)


# Elastic beanstalk health check
@application.route('/', methods=["GET"])
def healthCheck(): 
    return "Healthy",200; 
# Register your blueprints------------------------------------------------------------------------------------------------------------------------------------


# <AUTH ROUTE>-------------------------------------------------------------------------------------------------------------------
application.register_blueprint(authRoute, url_prefix='/auth')
application.register_blueprint(editClaimRoute, url_prefix='/')
application.register_blueprint(createClaimRoute, url_prefix='/createClaim')

# <REMOVE THE WHEN USING THIS AS A TEMPLATE>----------------------------------------------------------------------
# application.register_blueprint(exchangeRateRoute, url_prefix='/exchange_rate')
# application.register_blueprint(walletRoute, url_prefix='/wallet')
# application.register_blueprint(transactionRoute, url_prefix='/transaction')
#---------------------------------------------------------------------------------------------------------------------

if __name__ == '__main__':
    application.run()

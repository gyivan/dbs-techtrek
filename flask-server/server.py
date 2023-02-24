from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()

#Create a new Flask application
app = Flask(__name__)
cors = CORS(app, origins='*')
# app.config['CORS_HEADERS'] = 'Content-Type'

#Basic authentication
@auth.verify_password
def verify_password(username, password):
    if username == 'admin' and password == 'secret':
        return True
    return False

#Login page
@app.route("/login", methods = ['GET', 'POST'])
def login():
    response = make_response('')

    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']

        #Check if username and password are correct
        if username == 'admin' and password == 'secret':
            response = make_response("", 200)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        else:
            response = make_response("", 500)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True)
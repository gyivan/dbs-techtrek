from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_httpauth import HTTPBasicAuth
from insurancePolicies import *
from insuranceClaims import *
from user import *

auth = HTTPBasicAuth()

#Create a new Flask application
app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

#Basic authentication
@auth.verify_password
def verify_password(username, password):
    if username == 'admin' and password == 'secret':
        return True
    return False

#Login page
@app.route("/login", methods = ['POST'])
def login():
    response = make_response('')

    if request.method == 'POST':
        EmployeeID = request.json['EmployeeID']
        Password = request.json['Password']

        #Check if username and password are correct
        for item in user:
            if (item["EmployeeID"] == EmployeeID) and (item["Password"] == Password):
                print('LOGIN SUCCESSFUL')
                response = make_response("", 200)
                response.headers.add('Access-Control-Allow-Origin', '*')
                return response
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#Logout API call
@app.route("/logout", methods = ['POST'])
def logout():
    response = make_response('')

    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']

        #Check if username and password are correct
        if username == 'admin' and password == 'secret':
            print('CORRECT PASSWORD', username, password)
            response = make_response("", 200)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        else:
            print('WRONG PASSWORD', username, password)
            response = make_response("", 500)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
    
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#Register API call
@app.route("/register", methods = ['POST'])
def logout():
    account = {
     "EmployeeID": request.json['EmployeeID'],
     "Password": request.json['Password'],
     "FirstName": request.json['FirstName'],
     "LastName": request.json['LastName'],
     "Age": request.json['Age']
    }
    user.append(account)
    response = make_response('')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#Get All Policies API call
@app.route("/getAllPolicies", methods = ['GET', 'POST'])
def getAllPolicies():
    res = []
    #filter all policies owned by employee
    for policy in insurancePolicies:
        if policy["EmployeeID"] == request.json['EmployeeID']:
            res.append(policy)
    response = jsonify(res)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#Get One Policy API call
@app.route("/getOnePolicy/<id>", methods = ['GET', 'POST'])
def getOnePolicy(id):
    res = []
    for policy in insurancePolicies:
        if policy["InsuranceID"] == request.json['InsuranceID']:
            res.append(policy)
    response = jsonify(res)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#getPendingClaims
@app.route("/getPendingClaims", methods = ['GET', 'POST'])
def getPendingClaims():
    response = make_response('')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#getApprovedClaims 
@app.route("/getApprovedClaims", methods = ['GET', 'POST'])
def getApprovedClaims():
    response = make_response('')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#getRejectedClaims
@app.route("/getRejectedClaims", methods = ['GET', 'POST'])
def getRejectedClaims():
    response = make_response('')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#(only for pending claims) 

#updateClaim 
@app.route("/updateClaim", methods = ['GET', 'POST'])
def updateClaim():
    response = make_response('')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#deleteClaim
@app.route("/deleteClaim", methods = ['GET', 'POST'])
def deleteClaim():
    response = make_response('')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
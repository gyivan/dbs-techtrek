from flask import Flask, request, jsonify
from utils.dbConfig import db
from models.db_models import User
from flask_jwt_extended import create_access_token, decode_token
import json


def login():

    '''
        Example of response received in front end


        {
            "code":200,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2OTQ2Njg4MCwianRpIjoiOTdiYTM5YzEtOWM1Ni00YzkyLWExNmUtOWI3MThmNWQxMzRmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjY5NDY2ODgwLCJleHAiOjE2Njk3MjYwODAsImlkIjoxLCJuYW1lIjoiSmFja3kiLCJ1c2VybmFtZSI6InVzZXIxMDEifQ.LBmzSv7LHiby2plop9ufQEolGPmCIabz8W_eFVel6nU"
        }

        Example of decoded token 

        {
            "fresh": false,
            "iat": 1669466880,
            "jti": "97ba39c1-9c56-4c92-a16e-9b718f5d134f",
            "type": "access",
            "sub": 1,
            "nbf": 1669466880,
            "exp": 1669726080,
            "id": 1,
            "name": "Jacky",
            "username": "user101"
        }

    '''
    try:
        employeeid = request.json.get("EmployeeID", None)
        password = request.json.get("Password", None)
        print(employeeid)
        print(password)

        existingUser = User.query.filter( (User.EmployeeID == employeeid) & (User.Password == password) ).first(); 

        if not existingUser:
            return jsonify(
                {
                    "code": 404,
                    "message": "User and password incorrect."
                }
            ), 404

        additional_claims = {"id": existingUser.EmployeeID,
                            "firstname": existingUser.FirstName, "lastname": existingUser.LastName}
        
        print(additional_claims)

        access_token = create_access_token(
            identity=existingUser.EmployeeID, additional_claims=additional_claims)

        return jsonify({
            "code": 200,
            "token": access_token
        })

    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": e
            }
        ), 500
    

def protected():
    try:
        bearer = request.headers.get('Authorization',None)
        print(bearer)
        token = bearer.split()[1]
        if not token:
            return jsonify(
                {
                    "code":404,
                    "message":"No token in request"
                }
            )
        try:
            user = decode_token(token, allow_expired=True)
        except Exception as e:
            return jsonify(
                {
                    "code":404,
                    "message":"Incorrect token"
                }
            ),404
        print(user['id'])
        print(user['username'])
        return jsonify(
            {
                "code":200,
                "message":"OK"
            }
        ),200
    except Exception as e:
        return jsonify(
            {
                "code":500,
                "message":e
            }
        )
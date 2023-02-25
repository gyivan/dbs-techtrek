from flask import Flask, request, jsonify
from utils.dbConfig import db
from models.db_models import User,InsuranceClaim, InsurancePolicy
from flask_jwt_extended import create_access_token, decode_token
import json
import datetime
from sqlalchemy import inspect

def object_as_dict(obj):
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}


def editClaim():
    try:
        token = request.json.get("token", None)
        amount = request.json.get("Amount",None)
        purpose = request.json.get("Purpose",None)
        claimID = request.json.get("ClaimID",None)
        print(amount)
        print(purpose)
        print(claimID)

        if not token:
            return jsonify(
                {
                    "code":404,
                    "message":"No token in request"
                }
            ),404

        claim = InsuranceClaim.query.filter( InsuranceClaim.ClaimID==claimID ).first();
        print(claim)
        claim.Amount = float(amount)
        claim.Purpose = purpose
        claim.LastEditedClaimDate = datetime.datetime.now()
        db.session.commit()

        return jsonify({
            "code": 201,
            "message":"Successfully Updated"
        }),201

    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": e
            }
        ), 500
    
def getPoliciesByUser():
    try:
        token = request.json.get("token", None)
        if not token:
            return jsonify(
                {
                    "code":404,
                    "message":"No token in request"
                }
            )
        user = decode_token(token, allow_expired=True)
        print(user['id'])
        result = db.session.query(InsurancePolicy).join(User, User.EmployeeID==InsurancePolicy.EmployeeID).filter(User.EmployeeID==user['id']).all()
        data=[]
        for row in result:
            data.append(object_as_dict(row))
        return jsonify({
            "code": "200",
            "message": "Successfully retrieved",
            "result": data
        }), 200

    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": e
            }
        ), 500
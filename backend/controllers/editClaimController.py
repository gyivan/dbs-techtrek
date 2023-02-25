from flask import Flask, request, jsonify
from utils.dbConfig import db
from models.db_models import User,InsuranceClaim
from flask_jwt_extended import create_access_token, decode_token
import json
import datetime


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
            )

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
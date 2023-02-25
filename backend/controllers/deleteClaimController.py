from flask import Flask, request, jsonify
from utils.dbConfig import db
from models.db_models import InsuranceClaim
from sqlalchemy.orm import joinedload
# from flask_jwt_extended import jwt_required
 
 
# @jwt_required()
def deleteClaim(claimID):
    print('test')
    try:
        #delete claim
        print('enter try')
        # reqObj = request.get_json()
        # print(reqObj)
        # claimID = reqObj["claimID"]
        print(claimID)

        InsuranceClaim.query.filter_by(ClaimID = claimID).delete()

        db.session.commit()

        return jsonify({
            "data": f"Claim of id {claimID} has been successfully deleted"
        })
    except:
        return jsonify({
            "data": "Server error"
        }), 500
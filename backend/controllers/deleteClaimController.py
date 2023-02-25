from flask import Flask, request, jsonify
from utils.dbConfig import db
from models.db_models import InsuranceClaim
from sqlalchemy.orm import joinedload

def deleteClaimById(claimID):

    try:
        #delete claim
        InsuranceClaim.query.filter(InsuranceClaim.ClaimID == claimID).delete()

        db.session.commit()

        return jsonify({
            "data": f"Claim of id {claimID} has been successfully deleted"
        })
    except:
        return jsonify({
            "data": "Server error"
        }), 500


from flask import Flask, request, jsonify
from sqlalchemy import inspect
from utils.dbConfig import db
from models.db_models import InsuranceClaim, InsurancePolicy, User
from flask_jwt_extended import decode_token
import json




def object_as_dict(obj):
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}
            
def createClaim():

    try:
        # print('test1')
        reqObj = request.get_json()

        insuranceID = reqObj["InsuranceID"]
        FirstName = reqObj["FirstName"]
        LastName = reqObj["LastName"]
        ExpenseDate = reqObj["ExpenseDate"]
        Amount = reqObj["Amount"]
        Purpose = reqObj["Purpose"]
        FollowUp = reqObj["FollowUp"]
        PreviousClaimID = None
        Status = "pending"
        LastEditedClaimDate = reqObj["LastEditedClaimDate"]


        # query for the claimID
        insurance_policy = db.session.query(InsuranceClaim).order_by(InsuranceClaim.ClaimID.desc()).first()
        claimID = insurance_policy.ClaimID + 1

        newClaim = InsuranceClaim(ClaimID = claimID, InsuranceID= insuranceID , FirstName= FirstName,
                                LastName = LastName, ExpenseDate = ExpenseDate, Amount= Amount, Purpose=Purpose,
                                FollowUp = FollowUp, PreviousClaimID = PreviousClaimID, Status = Status, 
                                LastEditedClaimDate = LastEditedClaimDate)
        print("test")
        print("new element", newClaim)
        db.session.add(newClaim)



        db.session.commit() 

                    
        return jsonify({
            "data": f"New claim has been created successfully"
        }), 201   


    except:
        return jsonify(
            {
                "data": "Server error"
            }
        ), 500

# def getTransaction(): #send token in json body instead
#     try:
#         token = request.json.get('token',None)
#         if not token:
#             return jsonify(
#                 {
#                     "code":404,
#                     "message":"No token in request"
#                 }
#             )
#         try:
#             user = decode_token(token, allow_expired=True)
#             result = db.session.query(Transaction).join(Wallet, Transaction.wallet_id==Wallet.id).add_columns(Wallet.name).filter(Wallet.user_id==user['id']).order_by(Wallet.id).all()
#             data=[]
#             for row in result:
#                 data.append(object_as_dict(row[0]))
#                 data[-1]['name']=row[1]
#             print('getting transaction for user:',user['id'],user['username'])
#             return jsonify({
#                 "code": "200",
#                 "message": "Successfully retrieved",
#                 "result": data
#             }), 200
#         except Exception as e:
#             print(e)
#             return jsonify(
#                 {
#                     "code":404,
#                     "message":"Incorrect token"
#                 }
#             ),404

#     except Exception as e:
#         return jsonify(
#             {
#                 "code":500,
#                 "message":e
#             }
#         ),500

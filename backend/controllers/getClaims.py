from flask import Flask, request, jsonify, make_response
from utils.dbConfig import db
from sqlalchemy import inspect
from models.db_models import User,InsurancePolicy, InsuranceClaim
from flask_jwt_extended import jwt_required
import json; 


def object_as_dict(obj):
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}

# @jwt_required()
def getClaims():

    try:
        #reqObj = request.get_json()
        #employeeID = reqObj['EmployeeID']
        EmployeeID = int(request.json.get("EmployeeID"))
        print(EmployeeID)

        query = db.session.query(User.EmployeeID, InsuranceClaim.ExpenseDate, InsuranceClaim.FirstName, InsuranceClaim.LastName, InsuranceClaim.Amount, InsuranceClaim.Purpose, InsuranceClaim.FollowUp, InsuranceClaim.PreviousClaimID, InsuranceClaim.Status,InsuranceClaim.LastEditedClaimDate).filter(User.EmployeeID == EmployeeID).all()
        print(query)
        print(type(query))

        result = db.session.query(User.EmployeeID, InsuranceClaim.ExpenseDate, InsuranceClaim.FirstName, InsuranceClaim.LastName, InsuranceClaim.Amount, InsuranceClaim.Purpose, InsuranceClaim.FollowUp, InsuranceClaim.PreviousClaimID, InsuranceClaim.Status,InsuranceClaim.LastEditedClaimDate).filter(User.EmployeeID == EmployeeID).all()

        print('a')
        data=[]
        # print('b')
        for row in result:
            data.append(object_as_dict(row[0]))
            data[-1]['EmployeeID']=row[1]

        # print('c')
        # return jsonify({
        #         "data": query
        #     }), 200
        return make_response(query)




        # data=[]
        # for row in query:
        #     data.append(object_as_dict(row[0]))
        #     data[-1]['EmployeeID']=row[1]

        # return jsonify(
        #     {
        #         "data": data
        #     }
        # ),200

        # return jsonify(
        #     {
        #         "data": query,
        #         "message": "Successful Retrieval!"
        #     }
        # ), 200



        #return jsonify(query)

    except Exception as e:
        return jsonify(
            {
                "data":"Server error"
            }
        ),500; 
    

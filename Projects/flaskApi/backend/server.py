# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask, jsonify, request
from flask_cors import CORS

import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)

# # Route for seeing a data
# @app.route('/data',methods=['GET'])
# def get_time():

#     # Returning an api for showing in  reactjs
#     return {
#         'Name':"Akshay", 
#         "Age":"23",
#         "Date":x, 
#         "programming":"python"
#         }

@app.route('/data',methods=['POST'])
def post_data():
    data = request.get_json()
    
    print("Received data:", data)  # For debugging
    return jsonify({"message": "Data received successfully", "data": data}),201
# Running app
if __name__ == '__main__':
    app.run(debug=True)

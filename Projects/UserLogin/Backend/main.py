
from flask import Flask, jsonify, request
from flask_cors import cross_origin
import psycopg2
from psycopg2 import sql


app = Flask(__name__)


# Database connection setup
def get_db_connection():
    connection = psycopg2.connect(
        dbname="mydatabase",
        user="postgres",
        password="5619",
        host="localhost",  
        port="5432"
    )
    return connection

@app.route('/api/data', methods=['GET'])
def get_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users;')  
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    # Return data as JSON
    return jsonify(rows)

@app.route('/register',methods=['POST'])
@cross_origin(supports_credentials=True)
def post_data():
    # data = request.get_json()
    # print("Received data:", data)  # For debugging
    # return jsonify({"message": "Data received successfully", "data": data}),201
    new_data = request.get_json()
    conn = get_db_connection()
    cursor = conn.cursor()
    sql.SQL("")
    insert_query = sql.SQL("""
                    INSERT INTO users (username, email, password) 
                    VALUES (%s, %s, %s) 
                """)

    cursor.execute(insert_query, (new_data['username'], new_data['email'],new_data['password']))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'status': 'success'}), 201
# Running app
if __name__ == '__main__':
    app.run(debug=True)

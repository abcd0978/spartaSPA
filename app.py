#app.py
from flask import Flask, render_template, request,jsonify
from pymongo import MongoClient

client = MongoClient('mongodb+srv://kim:1234@cluster0.euyn9.mongodb.net/?retryWrites=true&w=majority')
db = client.db

app = Flask(__name__)

@app.route('/comment',methods=['GET'])
def getComment():
   #로직작성
   return jsonify({'result':'success','msg':'ㄹㄴㅁ'})

@app.route('/comment',methods=['POST'])
def writeComment():
   #로직작성
   return jsonify({'result':'success','msg':'ㄹㄴㅁ'})

@app.route('/comment',methods=['DELETE'])
def getComment():
   #로직작성
   comment = request.form
   return jsonify({'result':'success','msg':'ㄹㄴㅁ'})

@app.route('/comment',methods=['PUT'])
def modifyComment():
   #로직작성
   commentId = request.form['commentId_give']
   password = request.form['password_give']
   result = db.sparta.findOne({'commentId':commentId,'password':password})
   if(result.length == 0):
      return jsonify({'result':'failed','msg':'no such comment'})

   return jsonify({'result':'success','msg':'comment modified'})

@app.route('/like',methods=['GET'])
def getComment():
   #로직작성
   return jsonify({'result':'success','msg':'ㄹㄴㅁ'})

@app.route('/getlike',methods=['GET'])
def getComment():
   #로직작성
   return jsonify({'result':'success','msg':'ㄹㄴㅁ'})

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)
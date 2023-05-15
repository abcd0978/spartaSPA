#app.py
from flask import Flask, render_template, request,jsonify
app = Flask(__name__)

@app.route('/getcomment',methods=['GET'])
def getComment():
   #로직작성
   return jsonify({'result':'success','msg':'ㄹㄴㅁ'})

@app.route('/writecomment',methods=['POST'])
def writeComment():
   #로직작성
   return jsonify({'result':'success','msg':'ㄹㄴㅁ'})

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)
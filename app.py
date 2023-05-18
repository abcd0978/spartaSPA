import uuid
from flask import Flask, render_template, request, jsonify
from bson.objectid import ObjectId
import uuid
app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient(  'mongodb+srv://sparta:test@cluster0.bkvgtmw.mongodb.net/retryWrites=true&w=majority')

db = client.dbsparta


@app.route('/', methods=["GET","POST"])

def home():
   return render_template('index.html')






@app.route("/hithere", methods=["GET","POST"])

def hi_post():
    face_receive = request.form['face_give']
    name_receive = request.form['name_give']
    password_receive = request.form['password_give']
    message_receive = request.form['message_give']



     

    print(name_receive,password_receive,message_receive)
    doc = {

      'face': face_receive,
    'id': str(uuid.uuid1()),
    'name': name_receive,
    'password': password_receive,
    'message': message_receive

    }

    db.hi.insert_one(doc)

    return jsonify({'msg': '저장 완료!'})



@app.route("/hi", methods=["GET"])
def hi_get():
     all_comments= list(db.hi.find({},{'_id':False}))
     return jsonify({'result': all_comments})
    




@app.route("/comment", methods=['PUT'])

def hi_PUT():
    commentId_reveive = request.form['commentId_give']
    password_receive = request.form['password_give']
    modified_comment = request.form['modified_comment']
    result = list(db.hi.find({"password":password_receive,"id":str(commentId_reveive)}))
    if len(result)==0:
        return jsonify({'result':'비번 불일치'})
    query = {'id':str(commentId_reveive)}
    newValue = {"$set" : {"message": str(modified_comment)}}
    db.hi.update_one(query,newValue)
    return jsonify({'result': '댓글을 수정했습니다.'})

@app.route("/delComment", methods=["POST"])
def del_comment():
    id_receive = request.form['id_give']
    pw_receive = request.form['pw_give']

    target = db.hi.find_one({'id':id_receive, 'password': pw_receive})

    if target == None:
        return jsonify({'result': 0})
    else:
        db.hi.delete_one({'id':id_receive})
        return jsonify({'result': 1})



if __name__ == '__main__':

   app.run('0.0.0.0', port=5001, debug=True)


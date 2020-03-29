import os
from flask import Flask, render_template, url_for, request, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from os import path
if path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.getenv('MONGO_DBNAME')
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_shifts")
def get_shifts():
    return render_template("shifts.html", shifts=mongo.db.shifts.find())


@app.route('/edit_shift/<shift_id>')
def edit_shift(shift_id):
    this_shift = mongo.db.shifts.find_one({"_id": ObjectId(shift_id)})
    emploee_one = mongo.db.emploees
    emploee_two = mongo.db.emploees
    emploee_three = mongo.db.emploees
    emploee_four = mongo.db.emploees
    emploee_five = mongo.db.emploees
    return render_template('editshift.html', calendar=mongo.db.dates.find(), shift=this_shift, emploee_1=emploee_one.find(), emploee_2=emploee_two.find(), emploee_3=emploee_three.find(), emploee_4=emploee_four.find(), emploee_5=emploee_five.find())


@app.route('/update_shift/<shift_id>', methods=["POST"])
def update_shift(shift_id):
    shifts = mongo.db.shifts
    shifts.update({'_id': ObjectId(shift_id)},
                  {
        'shift_date': request.form.get('shift_date', type=int),
        'emploee_one': request.form.get('emploee_one'),
        'emploee_two': request.form.get('emploee_two'),
        'emploee_three': request.form.get('emploee_three'),
        'emploee_four': request.form.get('emploee_four'),
        'emploee_five': request.form.get('emploee_five')
    })
    return redirect(url_for('get_shifts'))


@app.route('/delete_shift/<shift_id>')
def delete_shift(shift_id):
    shifts = mongo.db.shifts
    shifts.update({'_id': ObjectId(shift_id)},
                  {
        '$set': {
            'emploee_one': '',
            'emploee_two': '',
            'emploee_three': '',
            'emploee_four': '',
            'emploee_five': ''
        }})
    return redirect(url_for('get_shifts'))


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)

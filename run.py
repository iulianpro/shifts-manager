import os
from flask import Flask, render_template, url_for, request, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from os import path
if path.exists("env.py"):
    import env


APP = Flask(__name__)

APP.config["MONGO_DBNAME"] = os.getenv('MONGO_DBNAME')
APP.config["MONGO_URI"] = os.getenv('MONGO_URI')

MONGO = PyMongo(APP)


@APP.route('/')
def get_shifts():
    all_shifts = MONGO.db.shifts.find()
    return render_template("pages/shifts.html", shifts=all_shifts)


@APP.route('/edit_shift/<shift_id>')
def edit_shift(shift_id):
    this_shift = MONGO.db.shifts.find_one({"_id": ObjectId(shift_id)})
    emploee_one = MONGO.db.emploees.find()
    emploee_two = MONGO.db.emploees.find()
    emploee_three = MONGO.db.emploees.find()
    emploee_four = MONGO.db.emploees.find()
    emploee_five = MONGO.db.emploees.find()
    all_days = MONGO.db.dates.find()
    return render_template('pages/editshift.html', calendar=all_days, shift=this_shift, emploee_1=emploee_one, emploee_2=emploee_two, emploee_3=emploee_three, emploee_4=emploee_four, emploee_5=emploee_five)


@APP.route('/update_shift/<shift_id>', methods=["POST"])
def update_shift(shift_id):
    shifts = MONGO.db.shifts
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


@APP.route('/delete_shift/<shift_id>')
def delete_shift(shift_id):
    shifts = MONGO.db.shifts
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


@APP.route('/delete_one/<shift_id>/<emploee_one>')
def delete_one(shift_id, emploee_one):
    shifts = MONGO.db.shifts
    shifts.update({'_id': ObjectId(shift_id)},
                  {
        '$set': {
            'emploee_one': ''
        }})
    return redirect(url_for('get_shifts'))


@APP.route('/delete_two/<shift_id>/<emploee_two>')
def delete_two(shift_id, emploee_two):
    shifts = MONGO.db.shifts
    shifts.update({'_id': ObjectId(shift_id)},
                  {
        '$set': {
            'emploee_two': ''
        }})
    return redirect(url_for('get_shifts'))


@APP.route('/delete_three/<shift_id>/<emploee_three>')
def delete_three(shift_id, emploee_three):
    shifts = MONGO.db.shifts
    shifts.update({'_id': ObjectId(shift_id)},
                  {
        '$set': {
            'emploee_three': ''
        }})
    return redirect(url_for('get_shifts'))


@APP.route('/delete_four/<shift_id>/<emploee_four>')
def delete_four(shift_id, emploee_four):
    shifts = MONGO.db.shifts
    shifts.update({'_id': ObjectId(shift_id)},
                  {
        '$set': {
            'emploee_four': ''
        }})
    return redirect(url_for('get_shifts'))


@APP.route('/delete_five/<shift_id>/<emploee_five>')
def delete_five(shift_id, emploee_five):
    shifts = MONGO.db.shifts
    shifts.update({'_id': ObjectId(shift_id)},
                  {
        '$set': {
            'emploee_five': ''
        }})
    return redirect(url_for('get_shifts'))


@APP.route('/get_emploees')
def get_emploees():
    all_emploees = MONGO.db.emploees.find()
    return render_template('pages/emploees.html', emploees=all_emploees)


@APP.route('/insert_emploee', methods=['POST'])
def insert_emploee():
    emploees = MONGO.db.emploees
    emploees.insert_one(request.form.to_dict())
    return redirect(url_for('get_emploees'))


@APP.route('/update_emploee/<emploee_id>', methods=["POST"])
def update_emploee(emploee_id):
    emploees = MONGO.db.emploees
    emploees.update({'_id': ObjectId(emploee_id)},
                  {
        'emploee_name': request.form.get('emploee_name'),
        'emploee_surname': request.form.get('emploee_surname'),
        'gender': request.form.get('gender'),
        'age': request.form.get('age'),
        'salary': request.form.get('salary'),
        'email': request.form.get('email'),
        'phone': request.form.get('phone')
    })
    return redirect(url_for('get_emploees'))


@APP.route('/delete_emploee/<emploee_id>')
def delete_emploee(emploee_id):
    MONGO.db.emploees.remove({'_id': ObjectId(emploee_id)})
    return redirect(url_for('get_emploees'))


if __name__ == '__main__':
    APP.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)

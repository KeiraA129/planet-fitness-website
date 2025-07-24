from flask import Blueprint, request, jsonify
from extensions import db
from models.fitness_class import FitnessClass

class_bp = Blueprint('classes', __name__)

@class_bp.route('/', methods=['GET'])
def get_all_classes():
    classes = FitnessClass.query.all()
    return jsonify([c.to_dict() for c in classes])

@class_bp.route('/', methods=['POST'])
def create_class():
    data = request.json
    new_class = FitnessClass(
        name=data.get('name'),
        instructor=data.get('instructor'),
        schedule=data.get('schedule')
    )
    db.session.add(new_class)
    db.session.commit()
    return jsonify(new_class.to_dict()), 201

@class_bp.route('/<int:id>', methods=['PUT'])
def update_class(id):
    data = request.json
    fc = FitnessClass.query.get_or_404(id)
    fc.name = data.get('name', fc.name)
    fc.instructor = data.get('instructor', fc.instructor)
    fc.schedule = data.get('schedule', fc.schedule)
    db.session.commit()
    return jsonify(fc.to_dict())

@class_bp.route('/<int:id>', methods=['DELETE'])
def delete_class(id):
    fc = FitnessClass.query.get_or_404(id)
    db.session.delete(fc)
    db.session.commit()
    return jsonify({"message": "Class deleted successfully"})
from flask import Flask
from extensions import db
from routes.classes import class_bp

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    app.register_blueprint(class_bp, url_prefix='/api/classes')
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
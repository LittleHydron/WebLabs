from flask import Flask
from flask_cors import CORS
from flask_restful import Api, marshal_with, Resource, fields, reqparse, abort
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:database_password@localhost/Lighter'
app.config['SECRET_KEY'] = 'secret'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

api = Api(app)
db = SQLAlchemy(app)


class LighterModel(db.Model):
    id = db.Column(db.Integer, primary_key=True, auto_increment=True)
    numOfLamps = db.Column(db.Integer, nullable=False)
    power = db.Column(db.Integer, nullable=False)
    type = db.Column(db.String(45), nullable=False)
    creatorName = db.Column(db.String(45), nullable=False)

    def __repr__(self):
        return f"id: {self.id}, creatorName: {self.creatorName}, power: {self.power}, type: {self.type}, numOfLamps: {self.numOfLamps}"


lighter_resource = {
    'id': fields.Integer,
    'type': fields.String(45),
    'numOfLamps': fields.Integer,
    'power': fields.Integer,
    'creatorName': fields.String(45)
}

post_args = reqparse.RequestParser()
post_args.add_argument("type", type=str, required=True)
post_args.add_argument("creatorName", type=str, required=True)
post_args.add_argument("power", type=int, required=True)
post_args.add_argument("numOfLamps", type=int, required=True)

patch_args = reqparse.RequestParser()
patch_args.add_argument("id", type=int, required=True)
patch_args.add_argument("type", type=str, required=False)
patch_args.add_argument("creatorName", type=str, required=False)
patch_args.add_argument("power", type=int, required=False)
patch_args.add_argument("numOfLamps", type=int, required=False)

delete_args = reqparse.RequestParser()
delete_args.add_argument("id", type=int, required=True)


class LighterResource(Resource):
    @marshal_with(lighter_resource)
    def get(self):
        result = LighterModel.query.all()
        return result

    def post(self):
        args = post_args.parse_args()
        db.session.add(LighterModel(type=args['type'], creatorName=args['creatorName'],
                                    power=args['power'], numOfLamps=args['numOfLamps']))
        db.session.commit()
        return 200

    @marshal_with(lighter_resource)
    def patch(self):
        args = patch_args.parse_args()
        print(args)
        lighter = LighterModel.query.filter_by(id=args['id']).first()
        if not lighter:
            abort(404, message="Lighter with such ID was not found...")
        if args['type'] is not None:
            lighter.type = args['type']
        if args['power'] is not None:
            lighter.power = args['power']
        if args['creatorName'] is not None:
            lighter.creatorName = args['creatorName']
        if args['numOfLamps'] is not None:
            lighter.numOfLamps = args['numOfLamps']
        db.session.commit()
        print(lighter)
        return lighter

    def delete(self):
        args = delete_args.parse_args()
        lighter = LighterModel.query.filter_by(id=args['id']).first()
        if not lighter:
            abort(404, message="Lighter with such ID was not found...")
        LighterModel.query.filter_by(id=args['id']).delete()
        db.session.commit()
        return '', 204


api.add_resource(LighterResource, '/lighter')


if __name__ == "__main__":
    app.run()

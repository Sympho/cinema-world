import Model, { DataTypes, database } from '../core/Model.ts';

class UserModel extends Model {
  static table = 'users';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      length: 50,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
  };
}

database.link([UserModel]);
// database.sync();

export default UserModel;

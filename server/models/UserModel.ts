import Model, { DataTypes, database } from '../core/Model.ts';

class User extends Model {
  static table = 'users';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      as: 'userEmail',
      unique: true,
      allowNull: false,
      length: 50,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
  };
}

export default User;

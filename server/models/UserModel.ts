import Model, { DataTypes } from '../core/Model.ts';

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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 50,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 50,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      length: 100,
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: true,
      length: 255,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
      length: 255,
    },
  };
}

export default User;

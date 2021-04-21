import Model, { DataTypes } from '../../core/Model.ts';

class MovieModel extends Model {
  static table = 'movies';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alias: {
      type: DataTypes.STRING,
      as: 'movieAlias',
      unique: true,
      allowNull: false,
      length: 150,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 120,
    },
    originalTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 120,
    },
    releasedOn: {
      type: DataTypes.DATETIME,
      allowNull: false,
      length: 120,
    },
    poster: {
      type: DataTypes.STRING,
      length: 255,
    },
  };
}

export default MovieModel;

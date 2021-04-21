import Model, { DataTypes } from '../../core/Model.ts';

class GenreModel extends Model {
  static table = 'genres';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alias: {
      type: DataTypes.STRING,
      as: 'genreAlias',
      unique: true,
      allowNull: false,
      length: 150,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 120,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
      length: 255,
    },
  };
}

export default GenreModel;

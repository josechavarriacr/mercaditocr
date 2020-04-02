module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define(
      'Book',
      {
        title: {
          type: DataTypes.STRING,
          allowNull: {
            args: false,
            msg: 'Please enter the title for your book'
          }
        },
        description: {
          type: DataTypes.STRING,
          allowNull: {
            args: false,
            msg: 'Pease input a description'
          }
        },
        state: {
          type: DataTypes.INTEGER,
          allowNull: false,
          enum: (-1, 0, 1),
        },
      },
      {
        tableName: 'Book',
      }
    )
    return Book
  }
  
const { DataTypes, Model } = require('sequelize');

function UserModel(sequelize) {
  class User extends Model {}
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Email field must have email format',
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          is: {
            args: [/\+65[0-9]{8}$/],
            msg:
              'Phone number should start with +65 and be followed by 8 digits.',
          },
        },
      },
      // TODO find a more elegant way to validate user phone numbers
      phoneNumberToken: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
}

module.exports = {
  model: UserModel,
};

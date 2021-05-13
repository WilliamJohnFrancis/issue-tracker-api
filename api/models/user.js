"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Ticket, Company }) {
            // define association here
            this.hasMany(Ticket, { foreignKey: "user_id" });
            this.belongsTo(Company, {
                foreignKey: "company_id",
                as: "company",
            });
        }

        toJSON() {
            return { ...this.get(), id: undefined, company_id: undefined };
        }
    }
    User.init(
        {
            user_uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "user",
            modelName: "User",
            createdAt: "created_datetime",
            updatedAt: "updated_datetime",
        }
    );
    return User;
};

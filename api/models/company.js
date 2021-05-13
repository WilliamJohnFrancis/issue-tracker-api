"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User }) {
            // define association here
        }

        toJSON() {
            return { ...this.get(), id: undefined };
        }
    }
    Company.init(
        {
            company_uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
            },
            company_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            number_of_tickets: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "company",
            modelName: "Company",
            createdAt: "created_datetime",
            updatedAt: "updated_datetime",
        }
    );
    return Company;
};

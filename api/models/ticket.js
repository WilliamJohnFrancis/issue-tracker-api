"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ticket extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User }) {
            // define association here
            this.belongsTo(User, { foreignKey: "user_id", as: "user" });
        }

        toJSON() {
            return { ...this.get(), id: undefined, user_id: undefined };
        }
    }
    ticket.init(
        {
            ticket_uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            priority: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            assigned_to: {
                type: DataTypes.UUID,
                unique: true,
            },
            suggested_solution: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "ticket",
            modelName: "Ticket",
            createdAt: "created_datetime",
            updatedAt: "updated_datetime",
        }
    );
    return ticket;
};

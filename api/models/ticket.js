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
            this.belongsTo(User, {
                foreignKey: {
                    name: "originator",
                    targetKey: "user_id",
                    type: DataTypes.UUID,
                },
            });
        }

        toJSON() {
            return { ...this.get(), id: undefined };
        }
    }
    ticket.init(
        {
            ticket_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            issue_number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            issue_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
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
            },
            progess: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            suggested_solution: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "ticket",
            modelName: "Ticket",
        }
    );
    return ticket;
};

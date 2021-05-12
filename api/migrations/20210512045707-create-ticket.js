"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("ticket", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            ticket_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                unique: true,
            },
            issue_number: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            issue_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            originator: {
                type: Sequelize.UUID,
                allowNull: false,
                unique: true,
            },
            description: {
                type: Sequelize.STRING,
            },
            priority: {
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING,
            },
            assigned_to: {
                type: Sequelize.UUID,
                unique: true,
            },
            progess: {
                type: Sequelize.STRING,
            },
            suggested_solution: {
                type: Sequelize.STRING,
            },
            created_datetime: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal(
                    "(CURRENT_TIMESTAMP at time zone 'utc')"
                ),
            },
            updated_datetime: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal(
                    "(CURRENT_TIMESTAMP at time zone 'utc')"
                ),
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("ticket");
    },
};

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
            ticket_uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                unique: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                require: true,
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
            },
            // TODO: look into making this a choice potentially maping int to meaning
            priority: {
                type: Sequelize.INTEGER,
            },
            // TODO: look into making this a choice
            status: {
                type: Sequelize.STRING,
            },
            assigned_to: {
                type: Sequelize.UUID,
                unique: true,
            },
            suggested_solution: {
                type: Sequelize.TEXT,
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

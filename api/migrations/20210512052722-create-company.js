"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("company", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            company_uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                unique: true,
            },
            company_name: {
                type: Sequelize.STRING,
            },
            number_of_tickets: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("company");
    },
};

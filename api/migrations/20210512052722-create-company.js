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
            company_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
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
            },
            updated_datetime: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("company");
    },
};

"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("ticket", "company_id", {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("ticket", "company_id");
    },
};

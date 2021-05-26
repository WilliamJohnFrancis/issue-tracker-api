"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("ticket", "active", {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("ticket", "active");
    },
};

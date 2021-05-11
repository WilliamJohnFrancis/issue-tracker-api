const userRoutes = require("./user");
const ticketRoutes = require("./ticket");
const companyRoutes = require("./company");

module.exports = (app) => {
    app.use("/api/user", userRoutes);
    app.use("/api/ticket", ticketRoutes);
    app.use("/api/company", companyRoutes);
};

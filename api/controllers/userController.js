const { getAllUsersForCompany } = require("../services/userService");

exports.getCompanyUsers = async (req, res) => {
    let company_id = req.body["company_id"];
    let [body, status] = await getAllUsersForCompany(company_id);

    res.status(status).send(body);
};

exports.getCompanyUser = (req, res) => {
    res.send("Get user " + req.params.id);
};

exports.updateUsersForCompany = (req, res) => {
    res.send("Update all users for " + req.body["company_id"]);
};

exports.updateUser = (req, res) => {
    res.send("Update user for " + req.params.id);
};

exports.createUser = (req, res) => {
    res.send(
        "Create user " + req.body["first_name"] + " " + req.body["last_name"]
    );
};

exports.deleteUser = (req, res) => {
    res.send("Delete user " + req.params.id);
};

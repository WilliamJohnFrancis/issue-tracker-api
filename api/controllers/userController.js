// TODO: Import models
// Using strings for now, testing connections

exports.getCompanyUsers = (req, res) => {
    res.send("Get all users controller");
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

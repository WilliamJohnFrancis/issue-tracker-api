const {
    getAllUsersForCompany,
    getUser,
    updateUser,
    updateUsersForCompany,
} = require("../services/userService");

// TODO: Look into alternative error handling
// TODO: Look into request validation

exports.getCompanyUsers = async (req, res) => {
    let companyId = req.body["company_id"];
    let [body, status] = await getAllUsersForCompany(companyId);

    res.status(status).send(body);
};

exports.getUser = async (req, res) => {
    let userId = req.params.id;
    let [body, status] = await getUser(userId);

    res.status(status).send(body);
};

exports.updateUsersForCompany = async (req, res) => {
    let companyId = req.body["company_id"];
    let active = req.body["active"];

    let [body, status] = await updateUsersForCompany(companyId, active);

    res.status(status).send(body);
};

exports.updateUser = async (req, res) => {
    let userId = req.params.id;
    let firstName = req.body["first_name"];
    let lastName = req.body["last_name"];
    let email = req.body["email"];
    let active = req.body["active"];

    let [body, status] = await updateUser(
        userId,
        firstName,
        lastName,
        email,
        active
    );

    res.status(status).send(body);
};

exports.createUser = (req, res) => {
    res.send(
        "Create user " + req.body["first_name"] + " " + req.body["last_name"]
    );
};

exports.deleteUser = (req, res) => {
    res.send("Delete user " + req.params.id);
};

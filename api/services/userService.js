const { User } = require("../models");

// TODO: Look into adding try catch around the DB transactions

exports.getAllUsersForCompany = async (companyId) => {
    let body;
    let status;

    if (companyId == false) {
        body = "companyId is required";
        status = 400;
        return [body, status];
    }

    let users = await User.findAll({
        where: { company_id: companyId },
    });

    if (users.length == 0) {
        body = "There are no users for the requested company.";
        status = 400;
        return [body, status];
    } else {
        body = users;
        status = 200;
        return [body, status];
    }
};

exports.getUser = async (userId) => {
    let body;
    let status;

    if (userId == false || typeof userId == "string") {
        body = "A valid userID is required";
        status = 400;
        return [body, status];
    }

    let user = await User.findOne({
        where: { id: userId },
    });

    if (user == null) {
        body = "This user does not exist.";
        status = 400;
        return [body, status];
    } else {
        body = user;
        status = 200;
        return [body, status];
    }
};

exports.updateUsersForCompany = async (
    userId,
    firstName,
    lastName,
    email,
    active
) => {
    let body;
    let status;

    if (userId == false || userId == undefined) {
        body = "userId is required";
        status = 400;
        return [body, status];
    }

    let user = await User.findOne({
        where: { id: userId },
    });

    if (user == null) {
        body = "This user does not exist.";
        status = 400;
        return [body, status];
    } else {
        await user.update(
            {
                first_name: firstName.toLowerCase(),
                last_name: lastName.toLowerCase(),
                email: email.toLowerCase(),
                active: active,
            },
            {
                where: {
                    id: userId,
                },
            }
        );
        body = user;
        status = 200;
        return [body, status];
    }
};

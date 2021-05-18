const { User } = require("../models");

exports.getAllUsersForCompany = async (company_id) => {
    let body;
    let status;

    console.log(body);
    console.log(status);

    if (company_id == false) {
        body = "company_id is required";
        status = 400;
        return [body, status];
    }

    let users = await User.findAll({
        where: {
            company_id: company_id,
        },
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

const { Company } = require("../models");

// TODO: Update to use uuid instead of id
// TODO: Look into adding try catch around the DB transactions
// TODO: Look into moving some of this into a request validation service and call it in the controller before passing into here

exports.getCompany = async (companyId) => {
    let body;
    let status;

    if (companyId == false || isNaN(companyId) == true) {
        body = "A valid companyID is required";
        status = 400;
        return [body, status];
    }

    let company = await Company.findOne({
        where: { id: companyId },
    });

    if (company == null) {
        body = "This company does not exist.";
        status = 400;
        return [body, status];
    } else {
        body = company;
        status = 200;
        return [body, status];
    }
};

exports.updateCompany = async (companyId, companyName) => {
    let body;
    let status;

    if (companyId == false || companyId == undefined) {
        body = "companyId is required";
        status = 400;
        return [body, status];
    }

    let company = await Company.findOne({
        where: { id: companyId },
    });

    if (company == null) {
        body = "This company does not exist.";
        status = 400;
        return [body, status];
    } else {
        await company.update(
            {
                company_name: companyName.toLowerCase(),
            },
            {
                where: {
                    id: companyId,
                },
            }
        );
        body = company;
        status = 200;
        return [body, status];
    }
};

exports.createCompany = async (companyName) => {
    let body;
    let status;

    if (companyName == false) {
        body = "There are missing fields.";
        status = 400;
        return [body, status];
    }

    let company = await Company.create({
        company_name: companyName.toLowerCase(),
        number_of_tickets: 0,
    });

    body = company;
    status = 200;
    return [body, status];
};

exports.deleteCompany = async (companyId) => {
    let body;
    let status;

    if (companyId == false || isNaN(companyId) == true) {
        body = "A valid companyId is required";
        status = 400;
        return [body, status];
    }

    let company = await Company.findOne({
        where: { id: companyId },
    });

    if (company) {
        await Company.destroy({
            where: { id: companyId },
        });

        body = "The company has been deleted";
        status = 200;
        return [body, status];
    } else {
        body = "Something went wrong please contact the system administrator";
        status = 400;
        return [body, status];
    }
};

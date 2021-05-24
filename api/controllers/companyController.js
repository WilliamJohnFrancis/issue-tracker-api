const {
    getCompany,
    updateCompany,
    createCompany,
    deleteCompany,
} = require("../services/companyService");

// TODO: Look into alternative error handling
// TODO: Look into request validation

exports.getCompany = async (req, res) => {
    let companyId = req.params.id;
    let [body, status] = await getCompany(companyId);

    res.status(status).send(body);
};

exports.updateCompany = async (req, res) => {
    let companyId = req.params.id;
    let companyName = req.body["company_name"];

    let [body, status] = await updateCompany(companyId, companyName);

    res.status(status).send(body);
};

exports.createCompany = async (req, res) => {
    let companyName = req.body["company_name"];

    let [body, status] = await createCompany(companyName);

    res.status(status).send(body);
};

exports.deleteCompany = async (req, res) => {
    let companyId = req.params.id;
    console.log(typeof companyId);

    let [body, status] = await deleteCompany(companyId);

    res.status(status).send(body);
};

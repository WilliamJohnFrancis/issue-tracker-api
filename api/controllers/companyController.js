// TODO: Import models
// Using strings for now, testing connections

exports.getCompany = (req, res) => {
    res.send("Get company " + req.params.id);
};

exports.updateCompany = (req, res) => {
    res.send("Update " + req.params.id);
};

exports.createCompany = (req, res) => {
    res.send("Create company " + req.body["name"]);
};

exports.deleteCompany = (req, res) => {
    res.send("Delete company " + req.params.id);
};

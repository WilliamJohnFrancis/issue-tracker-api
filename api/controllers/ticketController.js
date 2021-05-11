// TODO: Import models
// Using strings for now, testing connections

exports.getCompanyTickets = (req, res) => {
    res.send("Get all tickets controller");
};

exports.getTicket = (req, res) => {
    res.send("Get ticket " + req.params.id);
};

exports.updateTicketsForCompany = (req, res) => {
    res.send("Update all tickets for " + req.body["company_id"]);
};

exports.updateTicket = (req, res) => {
    res.send("Update ticket for " + req.params.id);
};

exports.createTicket = (req, res) => {
    res.send("Create ticket " + req.body["title"]);
};

exports.deleteTicket = (req, res) => {
    res.send("Delete ticket " + req.params.id);
};

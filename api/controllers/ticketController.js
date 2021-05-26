const {
    getCompanyTickets,
    getTicket,
    createTicket,
    updateTicket,
    updateTicketsForCompany,
    deleteTicket,
} = require("../services/ticketService");

// TODO: Look into alternative error handling
// TODO: Look into request validation

exports.getCompanyTickets = async (req, res) => {
    let companyId = req.body["company_id"];
    let [body, status] = await getCompanyTickets(companyId);

    res.status(status).send(body);
};

exports.getTicket = async (req, res) => {
    let companyId = req.params.id;
    let [body, status] = await getTicket(companyId);

    res.status(status).send(body);
};

exports.updateTicketsForCompany = async (req, res) => {
    let companyId = req.body["company_id"];
    let active = req.body["active"];

    let [body, status] = await updateTicketsForCompany(companyId, active);

    res.status(status).send(body);
};

exports.updateTicket = async (req, res) => {
    let ticketId = req.params.id;
    let name = req.body["name"];
    let description = req.body["description"];
    let priority = req.body["priority"];
    let ticketStatus = req.body["status"];
    let suggestedSolution = req.body["suggested_solution"];
    let assignedTo = req.body["assigned_to"];

    let [body, status] = await updateTicket(
        ticketId,
        name,
        description,
        priority,
        ticketStatus,
        suggestedSolution,
        assignedTo
    );

    res.status(status).send(body);
};

exports.createTicket = async (req, res) => {
    let companyId = req.body["company_id"];
    let userId = req.body["user_id"];
    let name = req.body["name"];
    let description = req.body["description"];
    let priority = req.body["priority"];
    let ticketStatus = req.body["status"];
    let suggestedSolution = req.body["suggested_solution"];

    let [body, status] = await createTicket(
        companyId,
        userId,
        name,
        description,
        priority,
        ticketStatus,
        suggestedSolution
    );

    res.status(status).send(body);
};

exports.deleteTicket = async (req, res) => {
    let ticketId = req.params.id;
    let [body, status] = await deleteTicket(ticketId);

    res.status(status).send(body);
};

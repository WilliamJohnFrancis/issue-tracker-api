const { Ticket, Company } = require("../models");

// TODO: Update to use uuid instead of id
// TODO: Look into adding try catch around the DB transactions
// TODO: Look into moving some of this into a request validation service and call it in the controller before passing into here
// TODO: Needs

// TODO: Test this again after making the create endpoint
exports.getCompanyTickets = async (ticketId) => {
    let body;
    let status;

    if (ticketId == false) {
        body = "ticketId is required";
        status = 400;
        return [body, status];
    }

    let users = await Ticket.findAll({
        where: { company_id: ticketId },
    });

    if (users.length == 0) {
        body = "There are no tickets for the requested company.";
        status = 400;
        return [body, status];
    } else {
        body = users;
        status = 200;
        return [body, status];
    }
};

exports.getTicket = async (ticketId) => {
    let body;
    let status;

    if (ticketId == false || isNaN(ticketId) == true) {
        body = "A valid companyID is required";
        status = 400;
        return [body, status];
    }

    let user = await Ticket.findOne({
        where: { id: ticketId },
    });

    if (user == null) {
        body = "This ticket does not exist.";
        status = 400;
        return [body, status];
    } else {
        body = user;
        status = 200;
        return [body, status];
    }
};

exports.updateTicketsForCompany = async (companyId, active) => {
    let body;
    let status;

    if (companyId == false || companyId == undefined) {
        body = "companyId is required";
        status = 400;
        return [body, status];
    }

    let tickets = await Ticket.findAll({
        where: { company_id: companyId },
    });

    if (tickets == null) {
        body = "Tickets do not exist for this company.";
        status = 400;
        return [body, status];
    } else {
        await Ticket.update(
            {
                active: active,
            },
            {
                where: {
                    company_id: companyId,
                },
            }
        );
        body = "All tickets for company: " + companyId + " have been updated.";
        status = 200;
        return [body, status];
    }
};

exports.updateTicket = async (
    ticketId,
    name,
    description,
    priority,
    ticketStatus,
    suggestedSolution,
    assignedTo
) => {
    let body;
    let status;

    if (ticketId == false || ticketId == undefined) {
        body = "ticketId is required";
        status = 400;
        return [body, status];
    }

    let ticket = await Ticket.findOne({
        where: { id: ticketId },
    });

    if (ticket == null) {
        body = "This ticket does not exist.";
        status = 400;
        return [body, status];
    } else {
        await ticket.update(
            {
                name: name.toLowerCase(),
                description: description.toLowerCase(),
                priority: priority,
                status: ticketStatus.toLowerCase(),
                suggested_solution: suggestedSolution.toLowerCase(),
                assigned_to: assignedTo,
            },
            {
                where: {
                    id: ticketId,
                },
            }
        );
        body = ticket;
        status = 200;
        return [body, status];
    }
};

// TODO: Look into doing something about the conditional if possible
exports.createTicket = async (
    ticketId,
    userId,
    name,
    description,
    priority,
    ticketStatus,
    suggestedSolution
) => {
    let body;
    let status;

    if (
        ticketId == false ||
        userId == false ||
        name == false ||
        description == false ||
        priority == false ||
        ticketStatus == false ||
        suggestedSolution == false
    ) {
        body = "There are missing fields.";
        status = 400;
        return [body, status];
    }

    let company = await Company.findOne({
        where: {
            id: ticketId,
        },
    });

    let user = await Ticket.create({
        name: name.toLowerCase(),
        user_id: userId,
        company_id: ticketId,
        description: description.toLowerCase(),
        priority: priority,
        status: ticketStatus.toLowerCase(),
        suggested_solution: suggestedSolution.toLowerCase(),
        number: company.get("number_of_tickets"),
    });

    body = user;
    status = 200;
    return [body, status];
};

exports.deleteTicket = async (ticketId) => {
    let body;
    let status;

    if (ticketId == false || isNaN(ticketId) == true) {
        body = "A valid ticketId is required";
        status = 400;
        return [body, status];
    }

    await Ticket.update(
        {
            active: false,
        },
        {
            where: {
                id: ticketId,
            },
        }
    );

    let result = await Ticket.findOne({
        where: { id: ticketId },
    });

    if (result.get("active") === false) {
        body = "The ticket has been deleted";
        status = 200;
        return [body, status];
    } else {
        body = "Something went wrong please try again";
        status = 400;
        return [body, status];
    }
};

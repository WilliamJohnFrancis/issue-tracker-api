const router = require("express").Router();
const ticketController = require("../controllers/ticketController");

router.get("/", ticketController.getCompanyTickets);

router.get("/:id", ticketController.getTicket);

router.put("/", ticketController.updateTicketsForCompany);

router.put("/:id", ticketController.updateTicket);

router.post("/", ticketController.createTicket);

router.delete("/:id", ticketController.deleteTicket);

module.exports = router;

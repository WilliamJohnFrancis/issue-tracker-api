const router = require("express").Router();
const companyController = require("../controllers/companyController");

router.get("/:id", companyController.getCompany);

router.put("/:id", companyController.updateCompany);

router.post("/", companyController.createCompany);

router.delete("/:id", companyController.deleteCompany);

module.exports = router;

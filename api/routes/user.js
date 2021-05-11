const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.getCompanyUsers);

router.get("/:id", userController.getCompanyUser);

router.put("/", userController.updateUserForCompany);

router.put("/:id", userController.updateUser);

router.post("/", userController.createUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;

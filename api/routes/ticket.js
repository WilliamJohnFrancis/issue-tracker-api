const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Get all tickets");
});

router.get("/:id", (req, res) => {
    res.send("Get ticket");
});

router.put("/", (req, res) => {
    console.log(req.body["company_id"]);
    res.send("Put all tickets");
});

router.put("/:id", (req, res) => {
    res.send("Put ticket");
});

router.post("/", (req, res) => {
    res.send("Post ticket");
});

router.delete("/:id", (req, res) => {
    res.send("Post ticket");
});

module.exports = router;

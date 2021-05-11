const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Get all users");
});

router.get("/:id", (req, res) => {
    res.send("Get user");
});

router.put("/", (req, res) => {
    console.log(req.body["company_id"]);
    res.send("Put all users");
});

router.put("/:id", (req, res) => {
    res.send("Put user");
});

router.post("/", (req, res) => {
    res.send("Post user");
});

router.delete("/:id", (req, res) => {
    res.send("Post user");
});

module.exports = router;

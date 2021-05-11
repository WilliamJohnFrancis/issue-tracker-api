const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Get all companys");
});

router.get("/:id", (req, res) => {
    res.send("Get company");
});

router.put("/", (req, res) => {
    console.log(req.body["company_id"]);
    res.send("Put all companys");
});

router.put("/:id", (req, res) => {
    res.send("Put company");
});

router.post("/", (req, res) => {
    res.send("Post company");
});

router.delete("/:id", (req, res) => {
    res.send("Post company");
});

module.exports = router;

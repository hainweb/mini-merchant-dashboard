const express = require("express");
const { getStats } = require("../controllers/statsController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.use(auth)
router.get("/", getStats);

module.exports = router;

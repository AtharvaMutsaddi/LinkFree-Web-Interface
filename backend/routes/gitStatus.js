const express = require("express");
const router = express.Router();
router.use(express.json());
const { getPublicStatus } = require("../controllers/gitStatus/publicRepo");
const { getPrivateStatus } = require("../controllers/gitStatus/privateRepo");

router.get("/publicRepo", getPublicStatus);
router.get("/privateRepo", getPrivateStatus);

module.exports = router;

const express = require("express");
const {
  getAllEdu,
  getEduById,
  createEdu,
  updateEdu,
  deleteEdu,
} = require("../controllers/edu.controller");

const router = express.Router();
const upload = require("../utils/fileUpload");

router.get("/", getAllEdu);
router.get("/:id", getEduById);
router.post("/", upload.single("image"), createEdu);
router.put("/:id", upload.single("image"), updateEdu);
router.delete("/:id", deleteEdu);

module.exports = router;

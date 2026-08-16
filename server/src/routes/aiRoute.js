const express = require("express");
const router = express.Router();

const {
  generateQuestions,
  generateAnswerFeedback,
} = require("../controllers/aiController");
const { authentication } = require("../middlewares/auth");

router.post("/generate-questions", authentication, generateQuestions);
router.post("/answer-feedback", authentication, generateAnswerFeedback);

module.exports = router;

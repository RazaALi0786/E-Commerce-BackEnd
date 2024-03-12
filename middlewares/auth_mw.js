// Check if request body is proper
const user_model = require("../models/user.model");

const verifySignUpBody = async (req, res, next) => {
  try {
    // Check for name
    if (!req.body.name) {
      return res.status(400).send({
        message: "Failed! Name was not provided in request body",
      });
    }
    // Check for email
    if (!req.body.email) {
      return res.status(400).send({
        message: "Failed! Email was not provided in request body",
      });
    }
    // Check for userId
    if (!req.body.userId) {
      return res.status(400).send({
        message: "Failed! User Id was not provided in request body",
      });
    }
    // Check if user with same userId is already present
    const user = await user_model.findOne({ userId: req.body.userId });
    if (user) {
      return res.status(400).send({
        message: "Failed! User with same user id is already present",
      });
    }
    next();
  } catch (err) {
    console.log("Error while validating the request object");
    res.status(500).send({
      message: "Error while validating the request body",
    });
  }
};
module.exports = {
  verifySignUpBody: verifySignUpBody,
};

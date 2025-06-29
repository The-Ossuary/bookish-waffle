const Joi = require('joi');

exports.ritualSchema = Joi.object({
  walletAddress: Joi.string().min(6).required(),
});
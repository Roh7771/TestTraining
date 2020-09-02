"use strict";

const { HttpCode } = require("../../../../constants");

const offerRequiredKeys = [`category`, `description`, `picture`, `title`, `type`, `sum`];

module.exports = (req, res, next) => {
  const offerKeys = Object.keys(req.body);
  const isKeysMatch = offerRequiredKeys.every((key) => offerKeys.includes(key));

  if (!isKeysMatch) {
    return res.status(HttpCode.BAD_REQUEST).send(`Неверные данные`);
  }

  return next();
};

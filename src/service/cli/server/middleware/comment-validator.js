"use strict";

const {HttpCode} = require(`../../../../constants`);

const commentRequiredKeys = [`text`];

module.exports = (req, res, next) => {
  const commentKeys = Object.keys(req.body);
  const isKeysMatch = commentRequiredKeys.every((key) => commentKeys.includes(key));

  if (!isKeysMatch) {
    return res.status(HttpCode.BAD_REQUEST).send(`Неверные данные`);
  }

  return next();
};

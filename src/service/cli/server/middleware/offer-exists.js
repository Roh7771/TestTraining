"use strict";

const { HttpCode } = require("../../../../constants");

module.exports = (service) => (req, res, next) => {
  const { offerId } = req.params;

  const ad = service.findOne(offerId);

  if (!ad) {
    res
      .status(HttpCode.NOT_FOUND)
      .send(`Объявление с id ${offerId} не найдено`);
  }

  res.locals.ad = ad;

  return next();
};

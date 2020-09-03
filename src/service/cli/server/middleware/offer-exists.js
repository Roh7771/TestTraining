"use strict";

const {HttpCode} = require(`../../../../constants`);

module.exports = (service) => (req, res, next) => {
  const {offerId} = req.params;

  const offer = service.findOne(offerId);

  if (!offer) {
    return res
      .status(HttpCode.NOT_FOUND)
      .send(`Объявление с id ${offerId} не найдено`);
  }

  res.locals.offer = offer;

  return next();
};

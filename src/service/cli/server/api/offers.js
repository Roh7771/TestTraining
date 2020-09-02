"use strict";

const {Router} = require(`express`);
const {HttpCode, NOT_FOUND_MESSAGE} = require(`../../../../constants`);
const offerExists = require("../middleware/offer-exists");
const offerValidator = require("../middleware/offer-validator");

const route = new Router();

module.exports = (app, service) => {
  route.get(`/`, (req, res) => {
    const ads = service.findAll();
    res.status(HttpCode.OK).json(ads);
  });

  route.get(`/:offerId`, offerExists(service), (req, res) => {
    const {ad} = res.locals;

    res.status(HttpCode.OK).json(ad);
  });

  route.post(`/`, offerValidator, (req, res) => {
    const newAd = service.create(req.body);

    return res.status(HttpCode.CREATED).json(newAd);
  });

  route.put(`/:offerId`, [offerExists(service), offerValidator], (req, res) => {
    const {offerId} = req.params;
    const updatedAd = service.update(offerId, req.body);

    return res.status(HttpCode.OK).json(updatedAd);
  });

  app.use(`/offers`, route);
};

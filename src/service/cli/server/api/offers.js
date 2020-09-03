"use strict";

const {Router} = require(`express`);
const {HttpCode} = require(`../../../../constants`);
const offerExists = require(`../middleware/offer-exists`);
const offerValidator = require(`../middleware/offer-validator`);
const commentValidator = require(`../middleware/comment-validator`);

const route = new Router();

module.exports = (app, offersService, commentsService) => {
  route.get(`/`, (req, res) => {
    const ads = offersService.findAll();
    res.status(HttpCode.OK).json(ads);
  });

  route.get(`/:offerId`, offerExists(offersService), (req, res) => {
    const {ad} = res.locals;

    res.status(HttpCode.OK).json(ad);
  });

  route.post(`/`, offerValidator, (req, res) => {
    const newAd = offersService.create(req.body);

    return res.status(HttpCode.CREATED).json(newAd);
  });

  route.put(`/:offerId`, [offerExists(offersService), offerValidator], (req, res) => {
    const {offerId} = req.params;
    const updatedAd = offersService.update(offerId, req.body);

    return res.status(HttpCode.OK).json(updatedAd);
  });

  route.delete(`/:offerId`, offerExists(offersService), (req, res) => {
    const {offerId} = req.params;
    const deletingOffer = offersService.delete(offerId);

    return res.status(HttpCode.OK).json(deletingOffer);
  });

  route.get(`/:offerId/comments`, offerExists(offersService), (req, res) => {
    const {ad} = res.locals;

    const comments = commentsService.findAll(ad);

    return res.status(HttpCode.OK).json(comments);
  });

  route.delete(`/:offerId/comments/:commentId`, offerExists(offersService), (req, res) => {
    const {ad} = res.locals;
    const {commentId} = req.params;

    const deletedComment = commentsService.delete(ad, commentId);

    if (!deletedComment) {
      return res.status(HttpCode.NOT_FOUND).send(`Комментарий с id ${commentId} не найден`);
    }

    return res.status(HttpCode.OK).json(deletedComment);
  });

  route.post(`/:offerId/comments`, [offerExists(offersService), commentValidator], (req, res) => {
    const {ad} = res.locals;
    console.log(ad);
    const newComment = commentsService.create(ad, req.body);

    return res.status(HttpCode.OK).json(newComment);
  });

  app.use(`/offers`, route);
};

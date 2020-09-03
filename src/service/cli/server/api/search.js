"use strict";

const {Router} = require(`express`);
const {HttpCode, NOT_FOUND_MESSAGE} = require(`../../../../constants`);

const route = new Router();

module.exports = (app, service) => {
  route.get(`/`, (req, res) => {
    const {query} = req.query;

    if (!query) {
      return res.status(HttpCode.BAD_REQUEST).send(`Неверные данные`);
    }

    console.log(query);
    const searchResult = service.findAll(query);
    return searchResult.length > 0
      ? res.status(HttpCode.OK).json(searchResult)
      : res.status(HttpCode.NOT_FOUND).send(NOT_FOUND_MESSAGE);
  });

  app.use(`/search`, route);
};

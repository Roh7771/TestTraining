"use strict";

const {Router} = require(`express`);
const mockData = require(`../../../../../mocks.json`);
const category = require(`./category`);
const {CategoryService, OffersService} = require(`../data-service`);
const offers = require(`./offers`);
const search = require(`./search`);
const SearchService = require(`../data-service/search`);
const CommentsService = require(`../data-service/comments`);

const app = new Router();

category(app, new CategoryService(mockData));
offers(app, new OffersService(mockData), new CommentsService());
search(app, new SearchService(mockData));

module.exports = app;

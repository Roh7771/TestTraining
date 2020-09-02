"use strict";

const {Router} = require(`express`);
const mockData = require(`../../../../../mocks.json`);
const category = require(`./category`);
const {CategoryService, OffersService} = require(`../data-service`);
const offers = require("./offers");

const app = new Router();

category(app, new CategoryService(mockData));
offers(app, new OffersService(mockData));

module.exports = app;

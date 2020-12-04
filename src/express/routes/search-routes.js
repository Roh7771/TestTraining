"use strict";

const {Router} = require(`express`);
const {PAGE_OFFSET} = require(`../../constants`);
const {catchAsync, getPageList, getCardColor} = require(`../../utils`);
const api = require(`../api`).getAPI();

const searchRouter = new Router();

searchRouter.get(
    `/`,
    catchAsync(async (req, res) => {
      let {page, search} = req.query;
      page = +page || 1;
      try {
        const {count, offers: results} = await api.search(search, page);
        results.forEach((offer) => {
          offer.cardColor = getCardColor();
        });
        const maxPage = Math.ceil(count / PAGE_OFFSET);
        const pageList = getPageList(page, maxPage);
        res.render(`search-result`, {page, maxPage, pageList, results, search, count});
      } catch (error) {
        res.render(`search-result`, {
          results: [],
          search,
        });
      }
    })
);

module.exports = searchRouter;

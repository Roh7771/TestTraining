"use strict";

const {
  getSequelizeQueryOptions,
  PAGE_OFFSET,
} = require(`../../../../constants`);

class SearchService {
  constructor(db) {
    this._db = db;
  }

  async findAll(search, page) {
    const offers = await this._db.Offer.findAll({
      ...getSequelizeQueryOptions(`Offer`, this._db),
    });

    const filteredOffers = offers.filter((offer) =>
      offer.title.toLowerCase().includes(search.toLowerCase())
    );

    const count = filteredOffers.length;

    return {
      count,
      offers: filteredOffers.slice(
          PAGE_OFFSET * (page - 1),
          PAGE_OFFSET * (page - 1) + PAGE_OFFSET
      ),
    };
  }
}

module.exports = SearchService;

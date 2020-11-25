"use strict";

const {db} = require(`../db/db`);

class SearchService {
  async findAll(searchText) {
    const offers = await db.Offer.findAll({
      attributes: {exclude: [`userId`, `typeId`]},
      include: [
        {
          model: db.User,
          as: `owner`,
          attributes: [`id`, `firstName`, `lastName`, `email`],
        },
        {model: db.OfferType, as: `offerType`},
        {
          model: db.Comment,
          as: `comments`,
          attributes: {exclude: [`userId`, `offerId`]},
          include: {
            model: db.User,
            as: `user`,
            attributes: [`id`, `firstName`, `lastName`, `email`],
          },
        },
      ],
    });

    return offers.filter((offer) => {
      return offer.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}

module.exports = SearchService;

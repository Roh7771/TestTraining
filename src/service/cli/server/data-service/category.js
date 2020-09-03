"use strict";

class CategoryService {
  constructor(offers) {
    this._offers = offers;
  }

  findAll() {
    const categories = this.offers.reduce((acc, offer) => {
      offer.category.forEach((category) => acc.add(category));
      return acc;
    }, new Set());

    this._offers.splice(3, 1);

    return [...categories];
  }
}

module.exports = CategoryService;

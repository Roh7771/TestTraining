"use strict";

class CategoryService {
  constructor(ads) {
    this._ads = ads;
  }

  findAll() {
    const categories = this._ads.reduce((acc, ad) => {
      ad.category.forEach((category) => acc.add(category));
      return acc;
    }, new Set());

    this._ads.splice(3, 1);

    return [...categories];
  }
}

module.exports = CategoryService;

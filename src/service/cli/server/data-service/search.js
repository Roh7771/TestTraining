"use strict";

class SearchService {
  constructor(ads) {
    this._ads = ads;
  }

  findAll(searchText) {
    return this._ads.filter((ad) => {
      return ad.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}

module.exports = SearchService;

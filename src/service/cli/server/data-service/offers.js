"use strict";

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../../../constants`);

class OffersService {
  constructor(ads) {
    this._ads = ads;
  }

  findAll() {
    return this._ads;
  }

  findOne(id) {
    return this._ads.find((ad) => ad.id === id);
  }

  create(data) {
    const newAd = {id: nanoid(MAX_ID_LENGTH), comments: [], ...data};

    this._ads.push(newAd);

    return newAd;
  }

  update(id, adData) {
    const oldAdIndex = this._ads.findIndex((ad) => ad.id === id);

    this._ads[oldAdIndex] = {...this._ads[oldAdIndex], ...adData};

    return this._ads[oldAdIndex];
  }

  delete(id) {
    const deletingOfferIndex = this._ads.findIndex((offer) => offer.id === id);

    return this._ads.splice(deletingOfferIndex, 1);
  }
}

module.exports = OffersService;

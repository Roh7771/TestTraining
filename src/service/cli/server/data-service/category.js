"use strict";

const {db} = require(`../db/db`);

class CategoryService {
  async findAll() {
    const categories = (await db.Category.findAll()).map((el) => el.name);

    return categories;
  }
}

module.exports = CategoryService;

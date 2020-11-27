"use strict";

const {db} = require(`../db/db`);

class CategoryService {
  async findAll() {
    return await db.Category.findAll();
  }
}

module.exports = CategoryService;

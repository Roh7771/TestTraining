"use strict";

const {getSequelizeQueryOptions} = require(`../../../../constants`);
const {db} = require(`../db/db`);

class CommentsService {
  async findAll(offer) {
    return await offer.getComments(getSequelizeQueryOptions(`Comment`, db));
  }

  async delete(offer, commentId) {
    await offer.removeComment(commentId);
  }

  async create(offer, commentData) {
    const newComment = await offer.createComment({offerId: offer.id, ...commentData});

    return newComment;
  }
}

module.exports = CommentsService;

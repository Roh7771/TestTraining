"use strict";

exports.DEFAULT_COMMAND = `--help`;

exports.USER_ARGV_INDEX = 2;

exports.ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

exports.DataFileName = {
  titles: `data/titles.txt`,
  categories: `data/categories.txt`,
  sentences: `data/sentences.txt`,
  comments: `data/comments.txt`,
};

exports.MAX_OFFERS_NUMBER = 1000;

exports.DEFAULT_PORT = 3000;

exports.DEFAULT_EXPRESS_PORT = 8080;

exports.NOT_FOUND_MESSAGE = `Ничего не найдено`;

exports.MAX_ID_LENGTH = 6;

exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

exports.OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

exports.MAX_DESCR_SIZE = 5;

exports.SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

exports.PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

exports.CommentRestrict = {
  MAX_SENTENCES_AMOUNT: 3,
  MAX_COMMENTS_AMOUNT: 5,
};

exports.MOCKS_FILE_NAME = `mocks.json`;

exports.DEFAULT_OFFER_AMOUNT = 1;

exports.HELP_MESSAGE = `
Программа запускает http-сервер и формирует файл с данными для API.

  Гайд:
  service.js <command>

  Команды:
  --version:            выводит номер версии
  --help:               печатает этот текст
  --generate <count>    формирует файл mocks.json
  --server <port>       запускает веб-сервер на указаном порте
`;

exports.PUBLIC_DIR = `public`;

exports.TEMPLATES_DIR = `templates`;

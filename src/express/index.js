"use strict";

const path = require(`path`);
const express = require(`express`);
const mainRouter = require(`./routes/main-routes`);
const registerRouter = require(`./routes/register-routes`);
const loginRouter = require(`./routes/login-routes`);
const myRouter = require(`./routes/my-routes`);
const offersRouter = require(`./routes/offers-routes`);
const searchRouter = require(`./routes/search-routes`);
const {DEFAULT_EXPRESS_PORT, DirPath} = require(`../constants`);

const app = express();

app.use(express.static(path.resolve(__dirname, DirPath.PUBLIC)));
app.set(`views`, path.resolve(__dirname, DirPath.TEMPLATES));
app.set(`view engine`, `pug`);

app.use(`/`, mainRouter);
app.use(`/register`, registerRouter);
app.use(`/login`, loginRouter);
app.use(`/my`, myRouter);
app.use(`/offers`, offersRouter);
app.use(`/search`, searchRouter);

app.use((req, res) => res.status(404).render(`errors/400`));
app.use((err, req, res) => res.status(500).render(`errors/500`));

app.listen(DEFAULT_EXPRESS_PORT);

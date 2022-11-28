const express = require("express");
const router = express.Router();

/* IMPORTAR TODOS LOS ENRRUTADORES */
const postRouter = require("./post.router");

/* Definir las rutas */
router.use("/post", postRouter);

module.exports = router;
const express = require("express");
const router = express.Router();

const postController = require("../../controllers/Post.controllers");

const postValidators = require("../../validators/post.validators");
const runValidators = require("../../validators/index.middleware");

/* GET ALL ELEMENTS */
router.get("/", postController.findAll);

/* GET ELEMENTS BY ID */
router.get("/:identifier",
    postValidators.findPostByIdValidators,
    runValidators,
    postController.findOneById
    );

/* GET ELEMENTS BY CATEGORY */

router.get("/category/:name_category",
    postValidators.findPostByCategoryValidators,
    runValidators,
    postController.findCategory
    );

/* CREATE ELEMENTS */
router.post("/",
    postValidators.createPostValidator,
    runValidators,
    postController.create
    );

module.exports = router;
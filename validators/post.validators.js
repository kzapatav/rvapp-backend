const { body, param } = require("express-validator");

const validators = {};

validators.createPostValidator = [
    body("category")
        .notEmpty().withMessage("Se debe seleccionar una categoria"),
    body("name_service")
        .notEmpty().withMessage("No se debe dejar vacio"),
    body("address")
        .notEmpty().withMessage("Debes de colocar la direccion"),
    body("img_url")
        .notEmpty().withMessage("Debes de añadir una imagen")
        .isURL().withMessage("La imagen debe de ser una URL")
];

validators.findPostByIdValidators = [
    param("identifier") //identifier
        .notEmpty().withMessage("El id no debe ir vacio")
        .isMongoId().withMessage("El id debe ser de Mongo")
];

validators.findPostByCategoryValidators = [
    param("name_category") //category
        .notEmpty().withMessage("Categoria no encontrada")      
];
module.exports = validators;
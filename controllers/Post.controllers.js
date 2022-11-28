const Post = require("../models/Post.model");
const debug = require("debug")("app:post-controller");


const controller = {};


/* CONTROLADOR PARA CREAR UN NUEVO SERVICIO */
controller.create = async (req, res) => {
    try {
        const { category, name_service, address, img_url } = req.body;

        const post = new Post({
            category: category,
            name_service: name_service,
            address: address,
            img_url: img_url
        });

        const newPost = await post.save();

        if (!newPost) {
            return res.status(409).json({ Error: "Ocurrio un error al crear el post" })
        }
        return res.status(201).json(newPost);
    } catch (error) {
        debug({ error })
        return res.status(500).json({ Error: "Error interno de servidor" })
    }
}


/* CONTROLADOR PARA LLAMAR TODOS LOS SERVICIOS */
controller.findAll = async (req, res) => {
    try {
        const posts = await Post.find({ hidden: false });
        return res.status(200).json({ posts });
    } catch (error) {
        debug({ error })
        return res.status(500).json({ Error: "Error interno de servidor" })
    }
}
/* CONTROLADOR PARA LLAMAR UN SERVICIO POR ID */
controller.findOneById = async (req, res) => {
    try {
        const { identifier } = req.params;

        const post = await Post.findById(identifier);

        if (!post) {
            return res.status(404).json({ Error: "Post no encontrado" });
        }
        return res.status(200).json(post);

    } catch (error) {
        debug({ error })
        return res.status(500).json({ Error: "Error interno de servidor" })
    }
}

/* CONTROLADOR PARA LLAMAR POR CATEGORIA */

controller.findCategory = async (req, res) => {
    try {
        const { name_category } = req.params;
        const posts = await Post.find({ category: name_category });
        return res.status(200).json({ posts });
    } catch (error) {
        debug({ error })
        return res.status(500).json({ Error: "Error interno de servidor" })
    }
}



module.exports = controller;
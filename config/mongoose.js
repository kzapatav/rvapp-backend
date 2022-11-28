const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");


const dbcluster = process.env.DBHOST || "cluster01";
const dbuser = process.env.DBPORT || "admin";
const dbpassword = process.env.DBNAME || "root";

const dburi = process.env.DBURI || `mongodb+srv://${dbuser}:${dbpassword}@${dbcluster}.irv2sq1.mongodb.net/?retryWrites=true&w=majority`;


const connect = async () =>{
    /* debug(dburi); */
    try {
        await Mongoose.connect(dburi);
        debug("Conexion exitosa a la bd")
    } catch (error) {
        debug("Error a la conexion a la bd")
        process.exit(1);
    }
}

module.exports = {
    connect
}   
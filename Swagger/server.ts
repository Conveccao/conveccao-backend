import express from "express"
import swaggerUI from "swagger-ui-express"
import cors from 'cors';
import { AppDataSource } from "../src/data-source";
import { config } from "../src/config/config"
import Logging from '../src/library/Logging'

import routes from "../src/routes";

import swaggerDocs from "./swagger.json";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/Swagger-conveccao", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get("/terms", (request, response) => {
    return response.json({
        message: "termos de serviço",
   });
});

mongoose
    .connect(config.mongo.url, {retryWrites: true, w: "majority"})
    .then(() => {
        Logging.info('Connected to mongoDB')
    })
    .catch(error => { 
        Logging.error('Unable to connect')
        Logging.error(error)
    })

AppDataSource.initialize().then(() => {
    const app = express()

    const options: cors.CorsOptions = {
        methods: "GET, OPTIONS, PUT, POST, DELETE",
        origin: "*"
    };

    app.use(cors(options))
    app.use(express.json())

    app.use(routes)

    //app.get('/', (req, res) => {
    //    return res.json('ok')
    //})
    return app.listen(process.env.PORT)
})

app.use("/v1", routes);
app.listen(3001, () => console.log("Server is running on port 3001"))
import express from "express"
import swaggerUI from "swagger-ui-express"

import { router } from "./routes";

import swaggerDocs from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/Swagger-conveccao", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get("/terms", (request, response) => {
    return response.json({
        message: "termos de serviço",
   });
});

app.use("/v1", router);
app.listen(3000, () => console.log("Server is running on port 3000"))
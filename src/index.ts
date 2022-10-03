import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Painel } from "./entity/Painel"

AppDataSource.initialize().then(async () => {

    console.log("Express server has started on port 3333. Open http://localhost:3333/painel to see results")

}).catch(error => console.log(error))

// create express app
const app = express()
app.use(bodyParser.json())

app.get("/painel", async function (req: Request, res: Response) {
    const painel = await AppDataSource.getRepository(Painel).find()
    res.json(painel)
})

app.listen(3333)


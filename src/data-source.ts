import "reflect-metadata"
import { DataSource } from "typeorm"
import { Painel } from "./entity/Painel"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "192.168.1.242",
    port: 1433,
    username: "vendas",
    password: "asavendas",
    database: "comunicador",
    options: {
        encrypt: false
    },
    logging: false,
    entities: [Painel],
    migrations: [],
    subscribers: [],
})

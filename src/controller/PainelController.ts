import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { Painel } from "../entity/Painel"

export class PainelController {

    private PainelRepository = getRepository(Painel)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.PainelRepository.find()
    }

}
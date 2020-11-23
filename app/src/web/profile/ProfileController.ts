import { before, GET, POST, route } from "awilix-express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import CoreBeans from "../../core/config/CoreBeans";
import ProfileService from "../../core/services/ProfileService";

@route('/profile')
export default class ProfileController {
    profileService: ProfileService

    constructor(container: any) {
        this.profileService = container[CoreBeans.PROFILE_SERVICE];
    }

    @route('/')
    @POST()
    @before([bodyParser.json()])
    async create(request: Request, response: Response) {
        response.send(await this.profileService.create(request.body));
    }

    @route('/:username')
    @GET()
    async get(request: Request, response: Response) {
        response.send(await this.profileService.get(request.params.username));
    }
}
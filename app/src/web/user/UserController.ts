import { DELETE, GET, POST, PUT, route } from 'awilix-express';
import { Request, Response } from 'express';
import Mapper from '../../core/mapper/Mapper';
import UserWebGateway from '../../core/gateway/web/UserWebGateway';
import User from '../../core/model/User';
import UserWebDto from './UserWebDto';

@route('/user')
export class UserController {

    gateway: UserWebGateway;
    transformer: Mapper<User, UserWebDto>;

    constructor(gateway: UserWebGateway, transformer: Mapper<User, UserWebDto>) {
        this.gateway = gateway;
        this.transformer = transformer;
    }

    @route('/:username')
    @GET()
    async get(request: Request, response: Response) {
        response.send(await this.gateway.get(request.params.username).map(model => this.transformer.to(model)));
    }

    @route('/')
    @POST()
    async create(request: Request, response: Response) {
        response.send(await this.transformer.to(this.gateway.create(this.transformer.from(request.body))));
    }

    @route('/')
    @PUT()
    async update(request: Request, response: Response) {
        response.send(await this.gateway.update(this.transformer.from(request.body)).map(model => this.transformer.to(model)));
    }

    @route('/user/:username')
    @DELETE()
    async delete(request: Request, response: Response) {
        response.send(await this.gateway.delete(request.params.username).map(model => this.transformer.to(model)));
    }
}
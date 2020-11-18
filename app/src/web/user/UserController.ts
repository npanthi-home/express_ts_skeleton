import { before, DELETE, GET, POST, PUT, route } from 'awilix-express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import CoreBeans from '../../core/config/CoreBeans';
import UserWebGateway from '../../core/gateway/web/UserWebGateway';
import Mapper from '../../core/mapper/Mapper';
import User from '../../core/model/User';
import WebBeans from '../config/WebBeans';
import UserWebDto from './UserWebDto';

@route('/user')
export class UserController {

    gateway: UserWebGateway;
    mapper: Mapper<User, UserWebDto>;

    constructor(container: any) {
        this.gateway = container[CoreBeans.USER_WEB_GATEWAY];
        this.mapper = container[WebBeans.USER_WEB_DTO_TRANSFORMER];
    }

    @route('/:username')
    @GET()
    async get(request: Request, response: Response) {
        response.send(await this.gateway.get(request.params.username).map(model => this.mapper.to(model)));
    }

    @route('/')
    @POST()
    @before([bodyParser.json()])
    async create(request: Request, response: Response) {
        response.send(await this.mapper.to(this.gateway.create(this.mapper.from(request.body))));
    }

    @route('/')
    @PUT()
    @before([bodyParser.json()])
    async update(request: Request, response: Response) {
        response.send(await this.gateway.update(this.mapper.from(request.body)).map(model => this.mapper.to(model)));
    }

    @route('/user/:username')
    @DELETE()
    async delete(request: Request, response: Response) {
        response.send(await this.gateway.delete(request.params.username).map(model => this.mapper.to(model)));
    }
}
import { before, DELETE, GET, POST, PUT, route } from "awilix-express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { StatusCodes as Codes } from "http-status-codes";
import CoreBeans from "../../core/config/CoreBeans";
import UseCases from "../../core/config/UseCases";
import NotFoundError from "../../core/error/types/NotFoundError";
import UnauthorizedError from "../../core/error/types/UnauthorizedError";
import Mapper from "../../core/mapper/Mapper";
import User from "../../core/model/User";
import UserService from "../../core/services/UserService";
import CountOneToHundredAsGuest from "../../core/usecase/user/CountOneToHundredAsGuest";
import { compose } from "../../core/utils/compose";
import WebBeans from "../config/WebBeans";
import { buildError } from "../response/builder";
import UserWebDto from "./UserWebDto";
@route("/user")
export class UserController {
  service: UserService;
  mapper: Mapper<User, UserWebDto>;
  countOneToHundredAsGuest: CountOneToHundredAsGuest;

  constructor(container: any) {
    this.service = container[CoreBeans.USER_SERVICE];
    this.mapper = container[WebBeans.USER_WEB_DTO_TRANSFORMER];
    this.countOneToHundredAsGuest =
      container[UseCases.COUNT_ONE_TO_HUNDRED_AS_GUEST];
  }

  @route("/countrequest")
  @GET()
  async count(request: Request, response: Response) {
    await this.countOneToHundredAsGuest.run();
    response.send("done");
  }

  @route("/:username")
  @GET()
  async get(request: Request, response: Response) {
    const user = await this.service.get(request.params.username);
    const userDto = await this.mapper.to(user);
    response.send(userDto);
  }

  @route("/")
  @POST()
  @before([bodyParser.json()])
  async create(request: Request, response: Response) {
    try {
      const userDto = await this.unsafeCreate(request);
      response.status(Codes.OK).send(userDto);
    } catch (error) {
      console.log(error);
      response.send(
        compose(
          buildError(UnauthorizedError.name)(Codes.UNAUTHORIZED),
          buildError(NotFoundError.name)(Codes.NOT_FOUND),
          buildError(Error.name)(Codes.BAD_REQUEST)
        )(error)
      );
    }
  }

  private async unsafeCreate(request: Request) {
    const user = await this.mapper.from(request.body);
    const savedUser = await this.service.create(user);
    return await this.mapper.to(savedUser);
  }

  @route("/")
  @PUT()
  @before([bodyParser.json()])
  async update(request: Request, response: Response) {
    const user = await this.service.update(
      await this.mapper.from(request.body)
    );
    const userDto = await this.mapper.to(user);
    response.send(userDto);
  }

  @route("/:username")
  @DELETE()
  async delete(request: Request, response: Response) {
    const user = await this.service.delete(request.params.username);
    const userDto = await this.mapper.to(user);
    response.send(userDto);
  }
}

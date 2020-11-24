import NotFoundError from '../../../core/error/NotFoundError';
import { Validation } from '../Validation';

export interface FieldsExistRequest {
  entity: any;
  fields: string[];
}

export default class DoFieldsExist implements Validation<any, FieldsExistRequest> {
  validate(request: FieldsExistRequest) {
    request.fields.forEach((field) => {
      if (!request.entity[field]) {
        throw new NotFoundError(`${field} not found.`);
      }
    });
  }

  buildRequest(entity: any, fields: any) {
    return { entity, fields };
  }
}

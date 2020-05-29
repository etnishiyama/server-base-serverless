import {databaseService, localeService, requestService} from '../../config/project_dependencies';
import {BaseHttpError} from "../../frameworks/error/base_http_error";
import {InternalServerException} from "../../frameworks/error/http_server_error";
import {useCaseUpdateUser} from "../../use_cases/update_user";

const updateRepositoryUser = useCaseUpdateUser(databaseService.repository);

export const updateUser = async (event, _context): Promise<any> => {
  localeService.setLocale(event.headers['Accept-Language']);
  const {id} = event.pathParameters || {};

  return requestService.validateBody(event.body)
    .then(body => updateRepositoryUser(id, body))
    .then(user => requestService.success(user.Attributes, 200))
    .catch(error => {
      if (error instanceof BaseHttpError) return requestService.error(error);
      return requestService.error(new InternalServerException(error));
    });
};

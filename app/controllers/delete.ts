import {databaseService, localeService, requestService} from '../../config/project_dependencies';
import {BaseHttpError} from "../../frameworks/error/base_http_error";
import {InternalServerException} from "../../frameworks/error/http_server_error";
import {useCaseInactivateUser} from "../../use_cases/inactivate_user";

const inactiveUser = useCaseInactivateUser(databaseService.repository);

export const inactivateUser = async (event, _context): Promise<any> => {
  localeService.setLocale(event.headers['Accept-Language']);
  const {id} = event.pathParameters || {};

  return inactiveUser(id)
    .then(user => requestService.success(user, 201))
    .catch(error => {
      if (error instanceof BaseHttpError) return requestService.error(error);
      return requestService.error(new InternalServerException(error));
    });
};

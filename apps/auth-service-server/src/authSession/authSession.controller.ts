import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthSessionService } from "./authSession.service";
import { AuthSessionControllerBase } from "./base/authSession.controller.base";

@swagger.ApiTags("authSessions")
@common.Controller("authSessions")
export class AuthSessionController extends AuthSessionControllerBase {
  constructor(protected readonly service: AuthSessionService) {
    super(service);
  }
}

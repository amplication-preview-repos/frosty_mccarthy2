import * as graphql from "@nestjs/graphql";
import { AuthSessionResolverBase } from "./base/authSession.resolver.base";
import { AuthSession } from "./base/AuthSession";
import { AuthSessionService } from "./authSession.service";

@graphql.Resolver(() => AuthSession)
export class AuthSessionResolver extends AuthSessionResolverBase {
  constructor(protected readonly service: AuthSessionService) {
    super(service);
  }
}

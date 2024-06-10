import { Module } from "@nestjs/common";
import { AuthSessionModuleBase } from "./base/authSession.module.base";
import { AuthSessionService } from "./authSession.service";
import { AuthSessionController } from "./authSession.controller";
import { AuthSessionResolver } from "./authSession.resolver";

@Module({
  imports: [AuthSessionModuleBase],
  controllers: [AuthSessionController],
  providers: [AuthSessionService, AuthSessionResolver],
  exports: [AuthSessionService],
})
export class AuthSessionModule {}

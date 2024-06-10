/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AuthSession as PrismaAuthSession,
  User as PrismaUser,
} from "@prisma/client";

export class AuthSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AuthSessionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.authSession.count(args);
  }

  async authSessions<T extends Prisma.AuthSessionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthSessionFindManyArgs>
  ): Promise<PrismaAuthSession[]> {
    return this.prisma.authSession.findMany<Prisma.AuthSessionFindManyArgs>(
      args
    );
  }
  async authSession<T extends Prisma.AuthSessionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthSessionFindUniqueArgs>
  ): Promise<PrismaAuthSession | null> {
    return this.prisma.authSession.findUnique(args);
  }
  async createAuthSession<T extends Prisma.AuthSessionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthSessionCreateArgs>
  ): Promise<PrismaAuthSession> {
    return this.prisma.authSession.create<T>(args);
  }
  async updateAuthSession<T extends Prisma.AuthSessionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthSessionUpdateArgs>
  ): Promise<PrismaAuthSession> {
    return this.prisma.authSession.update<T>(args);
  }
  async deleteAuthSession<T extends Prisma.AuthSessionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthSessionDeleteArgs>
  ): Promise<PrismaAuthSession> {
    return this.prisma.authSession.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.authSession
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

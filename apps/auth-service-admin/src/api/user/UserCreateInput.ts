import { AuthSessionCreateNestedManyWithoutUsersInput } from "./AuthSessionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  authSessions?: AuthSessionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  hashedPassword?: string | null;
  lastName?: string | null;
  password: string;
  passwordHash?: string | null;
  roles: InputJsonValue;
  username: string;
  userName?: string | null;
};

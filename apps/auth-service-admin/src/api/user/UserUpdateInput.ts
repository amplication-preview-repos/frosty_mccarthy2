import { AuthSessionUpdateManyWithoutUsersInput } from "./AuthSessionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  authSessions?: AuthSessionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  hashedPassword?: string | null;
  lastName?: string | null;
  password?: string;
  passwordHash?: string | null;
  roles?: InputJsonValue;
  username?: string;
  userName?: string | null;
};

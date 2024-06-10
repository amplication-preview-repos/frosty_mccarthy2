import { AuthSession } from "../authSession/AuthSession";
import { JsonValue } from "type-fest";

export type User = {
  authSessions?: Array<AuthSession>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  hashedPassword: string | null;
  id: string;
  lastName: string | null;
  passwordHash: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userName: string | null;
};

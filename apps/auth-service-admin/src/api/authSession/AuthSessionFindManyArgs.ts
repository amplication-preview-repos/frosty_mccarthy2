import { AuthSessionWhereInput } from "./AuthSessionWhereInput";
import { AuthSessionOrderByInput } from "./AuthSessionOrderByInput";

export type AuthSessionFindManyArgs = {
  where?: AuthSessionWhereInput;
  orderBy?: Array<AuthSessionOrderByInput>;
  skip?: number;
  take?: number;
};

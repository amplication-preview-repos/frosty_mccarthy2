import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthSessionUpdateInput = {
  associatedUser?: string | null;
  authToken?: string | null;
  expiresAt?: Date | null;
  expiryDate?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
  userReference?: string | null;
};

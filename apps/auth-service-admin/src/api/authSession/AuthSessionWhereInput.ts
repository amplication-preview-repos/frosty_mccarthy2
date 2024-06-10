import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthSessionWhereInput = {
  associatedUser?: StringNullableFilter;
  authToken?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userReference?: StringNullableFilter;
};

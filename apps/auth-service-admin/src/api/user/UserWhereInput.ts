import { AuthSessionListRelationFilter } from "../authSession/AuthSessionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  authSessions?: AuthSessionListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hashedPassword?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  username?: StringFilter;
  userName?: StringNullableFilter;
};

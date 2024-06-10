import { AuthSession as TAuthSession } from "../api/authSession/AuthSession";

export const AUTHSESSION_TITLE_FIELD = "associatedUser";

export const AuthSessionTitle = (record: TAuthSession): string => {
  return record.associatedUser?.toString() || String(record.id);
};

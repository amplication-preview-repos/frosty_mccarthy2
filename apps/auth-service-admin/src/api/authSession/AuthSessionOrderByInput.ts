import { SortOrder } from "../../util/SortOrder";

export type AuthSessionOrderByInput = {
  associatedUser?: SortOrder;
  authToken?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userReference?: SortOrder;
};

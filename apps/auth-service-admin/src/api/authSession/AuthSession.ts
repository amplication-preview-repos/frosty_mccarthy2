import { User } from "../user/User";

export type AuthSession = {
  associatedUser: string | null;
  authToken: string | null;
  createdAt: Date;
  expiresAt: Date | null;
  expiryDate: Date | null;
  id: string;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
  userReference: string | null;
};

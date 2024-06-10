import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AuthSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="associatedUser" source="associatedUser" />
        <TextField label="authToken" source="authToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiresAt" source="expiresAt" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="user_reference" source="userReference" />
      </SimpleShowLayout>
    </Show>
  );
};

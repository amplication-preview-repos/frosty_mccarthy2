import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="hashedPassword" source="hashedPassword" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="passwordHash" source="passwordHash" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="user_name" source="userName" />
        <ReferenceManyField
          reference="AuthSession"
          target="userId"
          label="AuthSessions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

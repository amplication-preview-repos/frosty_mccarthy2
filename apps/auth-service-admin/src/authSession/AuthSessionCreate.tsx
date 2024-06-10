import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const AuthSessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="associatedUser" source="associatedUser" />
        <TextInput label="authToken" source="authToken" />
        <DateTimeInput label="expiresAt" source="expiresAt" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="token" source="token" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="user_reference" source="userReference" />
      </SimpleForm>
    </Create>
  );
};

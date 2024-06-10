import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const AuthSessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

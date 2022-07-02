import { MyButton } from "../../components/MyButton";
import { useMutation } from "@apollo/client";
import { Text } from "react-native";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "../../graphql/mutations";
import { ALL_TRANSACTIONS } from "../../graphql/queries";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export const EditButton = ({ onSuccess, data }) => {
  const [editMutation, { data_edit, loading_edit, error }] = useMutation(
    UPDATE_TRANSACTION,
    { refetchQueries: [ALL_TRANSACTIONS] }
  );

  const editTransaction = async () => {
    console.log(data);
    const x = await editMutation({
      variables: data,
    });
    onSuccess();
  };

  return <MyButton title={"update"} onPress={editTransaction}></MyButton>;
};

import { MyButton } from "../../components/MyButton";
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../../graphql/mutations";
import { ALL_TRANSACTIONS } from "../../graphql/queries";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export const DeleteButton = ({ onSuccess, id }) => {
  const [deleteMutation, { data_del, loading_del, error_del }] = useMutation(
    DELETE_TRANSACTION,
    { refetchQueries: [ALL_TRANSACTIONS] }
  );

  const deleteTransaction = async () => {
    await deleteMutation({
      variables: { id },
    });
    onSuccess();
  };

  return <MyButton title={"delete"} onPress={deleteTransaction}></MyButton>;
};

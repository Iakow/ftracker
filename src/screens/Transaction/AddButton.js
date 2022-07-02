import { MyButton } from "../../components/MyButton";
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION } from "../../graphql/mutations";
import { ALL_TRANSACTIONS } from "../../graphql/queries";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Alert } from "react-native";

export const AddButton = ({ onSuccess, data }) => {
  const { user } = useContext(AuthContext);
  const [addMutation, { /*graphql,*/ loading, error }] = useMutation(
    ADD_TRANSACTION,
    {
      refetchQueries: [ALL_TRANSACTIONS],
    }
  );

  const addTransaction = async () => {
    await addMutation({
      variables: data,
    });
    onSuccess();
  };

  if (error) {
    Alert.alert(error.message);
  }

  return <MyButton title={"add"} onPress={addTransaction}></MyButton>;
};

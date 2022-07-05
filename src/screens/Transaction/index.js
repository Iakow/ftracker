import {
  StyleSheet,
  View,
  SafeAreaView,
  Keyboard,
  TextInput,
  Pressable,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { AddButton } from "./AddButton";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import { CategoryPicker } from "./CategoryPicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DatePicker } from "./DatePicker";
import { useIsFocused } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { normalize } from "../../tools";

export const TransactionScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const transactionData = route.params?.data;
  const isNewTransaction = !Boolean(transactionData);
  const { user } = useContext(AuthContext);

  const [sum, setSum] = useState(transactionData?.sum.toString() || "");
  const [date, setDate] = useState(
    transactionData ? new Date(transactionData?.date) : new Date(Date.now())
  );
  const [category, setCategory] = useState(
    transactionData?.category_name?.id || null
  );

  const leaveScreen = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (isNewTransaction) {
      setDate(new Date(Date.now()));
      setSum("");
      setCategory(transactionData?.category_name?.id);
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        style={styles.container}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.label}>Sum</Text>
        <TextInput
          value={sum}
          style={styles.input}
          placeholder={"Sum"}
          textAlign={"center"}
          onChangeText={(val) => setSum(val)}
          keyboardType={"numeric"}
        />
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.label}>Date</Text>
          <Text style={styles.label}>Time</Text>
        </View>
        <DatePicker date={date} handleValue={setDate} />

        <Text style={styles.label}>Category</Text>
        <CategoryPicker value={category} onChangeValue={setCategory} />

        <View style={styles.buttonsBlock}>
          {!isNewTransaction ? (
            <>
              <EditButton
                onSuccess={leaveScreen}
                data={{
                  sum,
                  category,
                  id: transactionData.id,
                  date,
                }}
              />
              <DeleteButton onSuccess={leaveScreen} id={transactionData.id} />
            </>
          ) : (
            <AddButton
              onSuccess={leaveScreen}
              data={{ sum, category, user_id: user.id, date }}
            />
          )}
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#5f7ece",
    marginTop: 20,
    fontWeight: "bold",
    // fontSize: normalize(18),
    fontSize: 18
    // fontSize: 18,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 5,
    fontSize: normalize(18),
  },
  buttonsBlock: {
    marginTop: "auto",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});

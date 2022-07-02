import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export const DatePicker = ({ date, handleValue }) => {
  const [mode, setMode] = useState("datetime");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    handleValue(selectedDate);
  };
  return (
    <>
      {Platform.OS === "android" && (
        <View
          style={[
            styles.input,
            {
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => {
              setShow(true);
              setMode("date");
            }}
          >
            <Text>{date?.toDateString() || "Date"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => {
              setShow(true);
              setMode("time");
            }}
          >
            <Text>{`${date?.getHours()}:${date?.getMinutes()}`}</Text>
          </TouchableOpacity>
        </View>
      )}

      {(Platform.OS === "ios" || show) && (
        <View
          style={[
            styles.input,
            {
              paddingHorizontal: 50,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <DateTimePicker
            style={[
              {
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              },
            ]}
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 5,
  },
  buttonsBlock: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});

import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/queries";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const CategoryPicker = ({ onChangeValue, value }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (error) return <Text>{error.message}</Text>;

  return (
    <View style={[styles.input, Platform.OS === "android" && { height: 50 }]}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => onChangeValue(itemValue)}
      >
        {loading && <Picker.Item label="Loading..." value="loading" />}
        {data &&
          data.categories.map(({ name, id }) => (
            <Picker.Item label={name} value={id} key={`category-${id}`} />
          ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 5,
  },
});

import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export const FAB = ({ onPress }) => (
  <TouchableOpacity style={styles.root} onPress={onPress}>
     <Ionicons name="add-circle" size={64} color="#4ecff2" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    alignSelf:'center'
  },
});

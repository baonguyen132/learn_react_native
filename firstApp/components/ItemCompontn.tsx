import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ItemComponentProps {
    item: { id: number; name: string; },
    handlePress: (id: number) => void,
}

const ItemComponent = (props: ItemComponentProps) => {

  const { item, handlePress } = props;

  

  return (
    <TouchableOpacity style={itemStyles.container} onPress={() => handlePress(item.id)}>
      <Text style={itemStyles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ItemComponent;

const itemStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 16,
  },
});
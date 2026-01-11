import { StyleSheet, Text, View, FlatList } from "react-native";
import ItemComponent from "./ItemCompontn";

const Data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 1' },
    { id: 8, name: 'Item 2' },
    { id: 9, name: 'Item 3' },
    { id: 10, name: 'Item 4' },
    { id: 11, name: 'Item 5' },
    { id: 12, name: 'Item 6' },
    { id: 13, name: 'Item 1' },
    { id: 14, name: 'Item 2' },
    { id: 15, name: 'Item 3' },
    { id: 16, name: 'Item 4' },
    { id: 17, name: 'Item 5' },
    { id: 18, name: 'Item 6' },
    { id: 19, name: 'Item 1' },
    { id: 20, name: 'Item 2' },
    { id: 21, name: 'Item 3' },
    { id: 22, name: 'Item 4' },
    { id: 23, name: 'Item 5' },
    { id: 24, name: 'Item 6' },

];

const FlatComponent = () => {
  return (
    <View style={flatStyles.container}>
      <Text style={flatStyles.title}>Flat Component</Text>
      <FlatList 
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemComponent item={item} handlePress={(id: number) => console.log(`Pressed item with id: ${id}`)} />} />
      
    </View>
  );
};
export default FlatComponent;

const flatStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        marginTop: 30,
        width: '100%',
        display: 'flex',
        gap: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        width: '100%',
    },
});
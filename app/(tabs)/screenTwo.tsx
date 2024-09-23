import { Text, View } from 'react-native';

export default function screenTwo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Screen Two</Text>
    </View>
  );
}

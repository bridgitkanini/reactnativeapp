
import { StyleSheet, Text, View } from 'react-native';
import { Slot } from 'expo-router';

export default function RootLayout() {
 

  return (
    <View style={styles.container}>
      <Text>Root Layout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

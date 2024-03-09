
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
      <Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
      <Button  title='Начать' color='#C67C4E'  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,

    backgroundColor: '#000',

    justifyContent: 'flex-end',
    
  },
  title: {
    maxWidth: 315,
    alignSelf: 'center',
    marginBottom: 10,

    fontSize: 34,
    fontWeight: '600',
    lineHeight: 42,
    textAlign: 'center',
    color: '#fff',

  },
  subtitle: {
    maxWidth: 250,
    alignSelf: 'center',
    marginBottom: 24,

    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#A9A9A9',
    textAlign: 'center',
    
  }
});

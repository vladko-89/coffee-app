
import { StyleSheet, Text,  View, ImageBackground } from 'react-native';

import { Button } from './shared/button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/main-background.png')} resizeMode='cover'>
        <View style={styles.content} >
        
          <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
          <Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
          <Button  text='Начать' color='#C67C4E'  />
        
        
        </View>
      </ImageBackground >
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    

  },
  content: {
    
    top: '25%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: 30,
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

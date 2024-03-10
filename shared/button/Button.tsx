import { Pressable, StyleSheet,  PressableProps, Text, View } from 'react-native';

export const Button = ({text, color, ...props}: PressableProps & {text: string, color: string}) => {

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 62,

      backgroundColor: `${color}`,
      borderRadius: 16,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600',
      color: '#fff',
    }
  })

  return (
    <Pressable {...props}>
      <View  style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  )

}


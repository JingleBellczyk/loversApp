import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const image = {
  uri: 'https://wallpapers.com/images/high/pink-hearts-background-2nmnoa3disyli8si.webp',
};

export default function MenuScreen() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={stylesImg.image}>
      <View style={styles.container}>
        <Text style={styles.text}>Hejeczka :***xoxo</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>NOTATECZKI</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>PLOTECZKI</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>MEMY</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 35,
    lineHeight: 84,
    textAlign: 'center',
  },
  button: {
    height: 100,
    width: 200,
    backgroundColor: '#808080c0',
    justifyContent: 'center', // Wyśrodkowanie tekstu w pionie
    alignItems: 'center', // Wyśrodkowanie tekstu w poziomie
    borderRadius: 10, // Zaokrąglenie rogów przycisku
    marginVertical: 10,
  },
  buttonText: {
    color: 'pink',
    fontSize: 30,
  },
});

const stylesImg = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

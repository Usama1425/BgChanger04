import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {

  const [randombackground, setrandombackground] = useState('#ffffff')

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setrandombackground(color)
  }
  return (
    <>
      <StatusBar backgroundColor={randombackground} />
      <View style={[styles.container, { backgroundColor: randombackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actiontxt}>
              Press me
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actiontxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});

export default App;

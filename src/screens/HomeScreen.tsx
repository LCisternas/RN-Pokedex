import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <Text style={{
        ...styles.globalMargin,
        ...styles.title,
        top: top + 10
      }}>
        Pokedex
      </Text>
    </>
  )
};

export default HomeScreen;

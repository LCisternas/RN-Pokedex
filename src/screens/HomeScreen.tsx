import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FadeInImage uri={item.picture} style={{ width: 100, height: 100 }} />
        )}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator
            size='large'
            color='red'
            style={{ height: 100 }}
          />
        }
      />
      {/* <Text style={{
        ...styles.globalMargin,
        ...styles.title,
        top: top + 10
      }}>
        Pokedex
      </Text> */}
    </>
  )
};

export default HomeScreen;

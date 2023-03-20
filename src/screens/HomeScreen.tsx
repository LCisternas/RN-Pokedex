import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View
        style={{
          alignItems: 'center'
        }}
      >
        <FlatList
          data={simplePokemonList}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={(
            <Text style={{
              ...styles.globalMargin,
              ...styles.title,
              top: top + 10,
              marginBottom: top + 20
            }}>
              Pokedex
            </Text>
          )}
          ListFooterComponent={
            <ActivityIndicator
              size='large'
              color='red'
              style={{ height: 100 }}
            />
          }
        />
      </View>
    </>
  )
};

export default HomeScreen;

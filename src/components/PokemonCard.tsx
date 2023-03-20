import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { FadeInImage } from './FadeInImage';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useNavigation } from '@react-navigation/native';

const dimensionWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const navigate = useNavigation();
  
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'grey'
    }).then(colors => {
      if (!isMounted) return;
      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'grey')
      } else if (colors.platform === 'ios')  {
        setBgColor(colors.background || 'grey')
      }
    })

    return () => {
      isMounted.current = false;
    }

  }, [])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={
        () => navigate.navigate('PokemonScreen' as never, { simplePokemon: pokemon, color: bgColor } as never)
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: bgColor
        }}
      >
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />

        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}
        />

      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: dimensionWidth * 0.4,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5
  },
  pokemonImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -8,
    bottom: -5
  }
})

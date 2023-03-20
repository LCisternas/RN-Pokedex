import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/NavigatorStack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

const PokemoScreen = ({ route: { params }, navigation }: Props) => {

  const { color, simplePokemon } = params;
  const { top } = useSafeAreaInsets();

  const { isLoading, pokemon } = usePokemon(simplePokemon.id);

  console.log(pokemon)

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 5
          }}
          onPress={() => navigation.pop()}
        >
          <Icon name='arrow-back-outline' size={40} color='black' />
        </TouchableOpacity>

        <Text
          style={{
            ...styles.pokemonName,
            top: top + 45
          }}
        >
          {simplePokemon.name + '\n'}#{simplePokemon.id}
        </Text>

        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage
          uri={simplePokemon.picture}
          style={{ ...styles.pokemonImage }}
        />

      </View>
      
      <View style={styles.loadingIndicator}>
        <ActivityIndicator
          color={color}
          size='large'
        />
      </View>
      
    </View>
  )
}

export default PokemoScreen

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    color: 'black',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -30,
    opacity: 0.7
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -20
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

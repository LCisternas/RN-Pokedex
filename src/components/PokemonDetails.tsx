import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          ...styles.container
        }}
      >
        <Text
          style={styles.title}
        >
          Types
        </Text>

        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map(({ type }) => (
              <Text
                key={type.name}
                style={{
                  ...styles.regularText,
                  marginRight: 10
                }}
              >
                {type.name}
              </Text>
            ))
          }
        </View>

        <Text style={{ ...styles.title, marginTop: 10 }}>Weight</Text>
        <Text style={{ ...styles.regularText }}>
          {pokemon.weight}lb
        </Text>

      </View>

      <View style={{ ...styles.container, marginTop: 10 }}>
        <Text style={{ ...styles.title }}>
          Sprites
        </Text>
      </View>

      <ScrollView
        style={{}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprites}
        />
      </ScrollView>

      <View style={{ ...styles.container, marginTop: 10 }}>
        <Text style={{ ...styles.title }}>Skills</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.abilities.map(({ ability }) => (
              <Text style={{ ...styles.regularText, marginRight: 10 }} key={ability.name}>
                {ability.name}
              </Text>
            ))
          }
        </View>
      </View>

      <View style={{ ...styles.container, marginTop: 10 }}>
        <Text style={{ ...styles.title }}>Moves</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            pokemon.moves.map(({ move }) => (
              <Text style={{ ...styles.regularText, marginRight: 10 }} key={move.name}>
                {move.name}
              </Text>
            ))
          }
        </View>
      </View>

      <View style={{ ...styles.container, marginTop: 10, marginBottom: 50 }}>
        <Text style={{ ...styles.title }}>Stats</Text>
        <View style={{ flexWrap: 'wrap' }}>
          {
            pokemon.stats.map((stat) => (
              <View key={stat.stat.name} style={{ flexDirection: 'row' }}>
                <Text style={{ ...styles.regularText, marginRight: 10, width: 150 }}>
                  {stat.stat.name}: 
                </Text>
                <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>
                  {stat.base_stat}
                </Text>
              </View>
            ))
          }
        </View>
      </View>

    </ScrollView>
  )
}

export default PokemonDetails

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 380
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  regularText: {
    fontSize: 20,
    color: 'black'
  },
  basicSprites: {
    width: 100,
    height: 100
  }
})

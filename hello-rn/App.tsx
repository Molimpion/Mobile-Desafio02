import React, { useState, useEffect } from 'react';
import { Alert, View, ScrollView, StyleSheet } from 'react-native';

import {
  Provider as PaperProvider,
  Card,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Lista: undefined;
  Detalhes: { pokemonId: number; pokemonNome: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

interface PokemonDetalhado {
  nome: string;
  img: string;
  peso: number;
}

const pokemonsIniciais = [
  { id: 1, nome: "Bulbasauro" },
  { id: 4, nome: "Charmander" },
  { id: 7, nome: "Squirtle" },
];

function ListaScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      {pokemonsIniciais.map(pokemon => (
        <Card key={pokemon.id} style={styles.card}>
          <Card.Title title={pokemon.nome} />
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => 
                navigation.navigate('Detalhes', { 
                  pokemonId: pokemon.id,
                  pokemonNome: pokemon.nome
                })
              }
            >
              Ver Dados
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

function DetalhesScreen({ route }: any) {
  const { pokemonId } = route.params; 
  
  const [pokemonEscolhido, setPokemonEscolhido] = useState<PokemonDetalhado | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(endpoint)
      .then(resposta => resposta.json())
      .then(json => {
        const pokemon: PokemonDetalhado = {
          nome: json.name,
          img: json.sprites.other["official-artwork"].front_default,
          peso: json.weight,
        };
        setPokemonEscolhido(pokemon);
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pokemonId]);

  return (
    <View style={styles.detailsContainer}>
      {loading ? (
        <ActivityIndicator animating={true} size="large" />
      ) : pokemonEscolhido ? (
        <Card style={styles.card}>
          <Card.Cover source={{ uri: pokemonEscolhido.img }} />
          <Card.Content style={styles.content}>
            <Text variant="headlineMedium" style={styles.pokemonNome}>
              {pokemonEscolhido.nome}
            </Text>
            <Text variant="titleLarge">
              Peso: {pokemonEscolhido.peso}
            </Text>
          </Card.Content>
        </Card>
      ) : (
        <Text>Erro ao carregar o Pokémon.</Text>
      )}
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Lista">
          
          <Stack.Screen 
            name="Lista" 
            component={ListaScreen} 
            options={{ title: 'Escolha seu Pokémon' }}
          />
          
          <Stack.Screen 
            name="Detalhes" 
            component={DetalhesScreen}
            options={({ route }) => ({ title: route.params.pokemonNome })}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  pokemonNome: { 
    textTransform: 'capitalize',
    marginBottom: 8,
  },
});
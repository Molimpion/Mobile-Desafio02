# mobile-desafio02

Este repositório contém o projeto `hello-rn`, um aplicativo simples desenvolvido em React Native (com Expo e TypeScript) que cumpre os requisitos do Desafio 2.

## 🚀 Sobre o Projeto 

O objetivo deste desafio é criar um aplicativo que consome uma API pública, utiliza componentes visuais da biblioteca **React Native Paper** e implementa **navegação** entre telas.

O aplicativo exibe uma lista inicial de Pokémon e, ao selecionar um, navega para uma tela de detalhes que busca e exibe informações daquele Pokémon (nome, peso e imagem) consumindo a [PokeAPI](https://pokeapi.co/).

### Funcionalidades

  * **Navegação em Stack:** O app usa React Navigation (`createNativeStackNavigator`) para gerenciar duas telas: `Lista` e `Detalhes`.
  * **UI com Paper:** Todos os componentes visuais principais (`Card`, `Button`, `Text`, `ActivityIndicator`) são do React Native Paper.
  * **Tela de Lista:** Exibe os Pokémon iniciais (Bulbasauro, Charmander, Squirtle) em `Card`s.
  * **Tela de Detalhes:**
      * Recebe o ID do Pokémon via navegação.
      * Mostra um `ActivityIndicator` (loading) enquanto busca os dados.
      * Exibe a imagem, nome e peso do Pokémon selecionado.

## 🛠️ Tecnologias Utilizadas

  * **React Native**
  * **Expo**
  * **TypeScript**
  * **React Native Paper** (para componentes de UI)
  * **React Navigation** (para navegação entre telas)

## 🏁 Como Executar

1.  Clone este repositório.

2.  Navegue até o diretório do aplicativo:

    ```bash
    cd molimpion/mobile-desafio1/mobile-desafio1-155e5b14d06a29b5ccf4f9c79d2ac8504b82423e/hello-rn
    ```

3.  Instale as dependências base do `package.json`:

    ```bash
    npm install
    ```

4.  **Instale as dependências do Desafio 2** (Paper e Navigation):

    ```bash
    npx expo install react-native-paper @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
    ```

5.  Inicie o servidor de desenvolvimento do Expo:

    ```bash
    npm start
    ```

    *(Este comando executa `expo start`)*

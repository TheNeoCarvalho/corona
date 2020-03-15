import React, { useEffect, useState} from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import styled from 'styled-components';
import { MonoText } from '../components/StyledText';
import axios from 'axios';

import api from '../services/api';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  padding: 5px 15px
`;

const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  margin: 10px 20px;
  background: rgba(0,0,0,0.5);
  width: 90%;
`;

const Text = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const Image = styled.Image`
  margin: 0 10px;
  width: 95%;
  height: 250px;

`;

export default function HomeScreen() {
  const [dados, setDados] = useState([]);

  useEffect(()=>{

    async function loadData() {
      const response = await axios.get('https://covid19.mathdro.id/api');
      setDados(response.data);
    }

    loadData();
  },[])

  return (
    <Container>
      <Box>
        <Text>Confirmed</Text>
        <Text>{ dados.confirmed.value }</Text>
      </Box>

      <Box>
        <Text>Recovered</Text>
        <Text>{ dados.recovered.value }</Text>
      </Box>

      <Box>
        <Text>Deaths</Text>
        <Text>{ dados.deaths.value }</Text>
      </Box>
      <Image source={{uri: dados.image}} />
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height:300,
    width: 300
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  text: {
    fontSize: 44,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

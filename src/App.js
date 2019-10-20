import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CurWeather from './components/CurWeather';
import Favourites from './components/Favourites';

const Container = styled.div`
  margin: 20px 40px;
  
  button {
    cursor: pointer;
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <CurWeather />
      <Favourites />
    </Container>
  );
}

export default App;

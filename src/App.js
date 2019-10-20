import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CurWeather from './components/CurWeather';
import Favourites from './components/Favourites';
import Preloader from './components/Preloader';

const Container = styled.div`
  margin: 20px 40px;
  
  button {
    cursor: pointer;
  }
`;

function App(props) {
  const { loading } = props;
  return (
    <Container>
      <Header />
      {loading
        ? <Preloader />
        : <CurWeather />}
      <Favourites />
    </Container>
  );
}

export default App;

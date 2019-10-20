import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CurWeather from "./components/CurWeather";

const Container = styled.div`
  margin: 20px 40px;
`;

function App() {
  return (
    <Container>
      <Header />
      <CurWeather />
    </Container>
  );
}

export default App;

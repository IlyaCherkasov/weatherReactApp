import React from 'react';
import styled from 'styled-components';
import InfoBlock from './InfoBlock';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  width: 45%;
`;

const PlaceName = styled.div`
  font-size: 30pt;
  font-weight: 700;
  color: #71848B;
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  float: left;
  border: 3px solid #71848B;
  margin: 40px 0 0 0;
  text-align: center;
  color: #6E8084;
  
  p {
    margin: 31px 0;
  }
`;

const Weather = styled.div`
  float: right;
  font-size: 80pt;
  line-height: 80px;
  color: #869197;
  margin: 40px 40px 0 0;
`;


function CurWeather() {
  return (
    <Container>
      <InfoContainer>
        <PlaceName>Санкт-Петербург</PlaceName>
        <Icon>
          <p>Иконка погоды</p>
        </Icon>
        <Weather>8°С</Weather>
      </InfoContainer>
      <InfoContainer>
        <InfoBlock />
      </InfoContainer>
    </Container>
  );
}

export default CurWeather;

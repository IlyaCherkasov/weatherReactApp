import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import InfoBlock from './InfoBlock';
import * as weatherSelector from '../weather/selectors';

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
  color: #6E8084;
  display: flex;
  justify-content: center;
  vertical-align: center;
  img {
    width: 100px;
    height: 100px;
  }
`;

const Weather = styled.div`
  float: right;
  font-size: 80pt;
  line-height: 80px;
  color: #869197;
  margin: 40px 40px 0 0;
`;


function CurWeather(props) {
  const { weather } = props;
  return (
    <Container>
      <InfoContainer>
        <PlaceName>{weather.name}</PlaceName>
        <Icon>
          <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}  alt="icon"/>
        </Icon>
        <Weather>{Math.round(weather.main.temp - 273)}°C</Weather>
      </InfoContainer>
      <InfoContainer>
        <InfoBlock />
      </InfoContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  weather: weatherSelector.getWeather(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurWeather);

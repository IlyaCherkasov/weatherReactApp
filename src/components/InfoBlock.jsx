import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as weatherSelector from "../weather/selectors";

const AddInfoBox = styled.div`
  width: 97.5%;
  background: #A7AFB1;
  margin-top: 10px;
  padding: 10px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  
  div:first-child {
    font-size: 14pt;
    font-weight: 700;
  }
  
  div:last-child {
    font-weight: 500;
    font-size: 14pt;
  }
`;


function CurWeather(props) {
  const { weather } = props;
  return (
    <>
      <AddInfoBox>
        <div>Ветер</div>
        <div>{weather.wind.speed} м/с, {weather.wind.deg}°</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Облачность</div>
        <div>{weather.clouds.all}%</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Давление</div>
        <div>{weather.main.pressure/1000} Бар</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Влажность</div>
        <div>{weather.main.humidity}%</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Координаты</div>
        <div>[{weather.coord.lon}, {weather.coord.lat}]</div>
      </AddInfoBox>
    </>
  );
}

const mapStateToProps = state => ({
  weather: weatherSelector.getWeather(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurWeather);

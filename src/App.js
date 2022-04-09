import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import CurWeather from './components/CurWeather';
import Favorites from './components/Favorites';
import Preloader from './components/Preloader';
import { getGeolocation } from './geolocation/actions';
import { getWeatherByGeo } from './weather/actions';
import * as geolocationSelector from './geolocation/selectors';
import * as weatherSelector from './weather/selectors';

const Container = styled.div`
  margin: 20px 40px;
  
  button {
    cursor: pointer;
  }
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  const error = useSelector(weatherSelector.getError);
  const geolocation = useSelector(geolocationSelector.getGeolocation);
  const weather = useSelector(weatherSelector.getWeather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeolocation());
  }, [dispatch]);

  useEffect(() => {
    if (geolocation) dispatch(getWeatherByGeo(geolocation));
  }, [dispatch, geolocation]);

  useEffect(() => {
    if (weather) setLoading(false);
  }, [weather]);

  const refreshLocation = () => {
    setLoading(true);
    dispatch(getGeolocation());
  }

  const tryAgain = () => {
    setLoading(true);
    dispatch(getWeatherByGeo(geolocation));
  }

  return (
    <Container>
      <Header refresh={refreshLocation} />
      {loading || error
        ? <Preloader error={error} repeat={tryAgain} />
        : <CurWeather />}
      <Favorites/>
    </Container>
  );
}

export default App;

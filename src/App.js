import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './components/Header';
import CurWeather from './components/CurWeather';
import Favourites from './components/Favourites';
import Preloader from './components/Preloader';
import { getGeolocation } from './geolocation/actions';
import { getWeatherByGeo } from './weather/actions';
import * as geolocationSelector from './geolocation/selectors';

const Container = styled.div`
  margin: 20px 40px;
  
  button {
    cursor: pointer;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.refreshGeo = this.refreshGeo.bind(this);
  }

  refreshGeo() {
    this.setState(
      { loading: true },
      () => this.props.getGeolocation(
        () => this.props.getWeatherByGeo(
          this.props.geolocation,
          () => this.setState({ loading: false }))));
  }

  componentDidMount() {
    this.refreshGeo();
  }

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <Header refresh={() => this.refreshGeo()} />
        {loading
          ? <Preloader repeat={() => this.refreshGeo()} />
          : <CurWeather />}
        <Favourites/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  geolocation: geolocationSelector.getGeolocation(state),
});

const mapDispatchToProps = {
  getGeolocation,
  getWeatherByGeo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

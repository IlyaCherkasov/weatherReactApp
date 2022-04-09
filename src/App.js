import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
    const { error } = this.props;
    return (
      <Container>
        <Header refresh={() => this.refreshGeo()} />
        {loading || error
          ? <Preloader error={error} repeat={() => this.refreshGeo()} />
          : <CurWeather />}
        <Favorites/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  geolocation: geolocationSelector.getGeolocation(state),
  error: weatherSelector.getError(state),
});

const mapDispatchToProps = {
  getGeolocation,
  getWeatherByGeo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

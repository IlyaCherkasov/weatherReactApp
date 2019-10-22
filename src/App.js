import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './components/Header';
import CurWeather from './components/CurWeather';
import Favourites from './components/Favourites';
import Preloader from './components/Preloader';
import { getGeolocation } from './geolocation/actions';
import * as geolocationSelector from './geolocation/selectors';
import * as favouritesSelector from './favourites/selectors';

const Container = styled.div`
  margin: 20px 40px;
  
  button {
    cursor: pointer;
  }
`;

class App extends React.Component {
  componentDidMount() {
    this.props.getGeolocation();
  }

  render() {
    const { loading } = this.props;
    return (
      <Container>
        <Header/>
        {loading
          ? <Preloader/>
          : <CurWeather/>}
        <Favourites/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: geolocationSelector.isLoading(state) && favouritesSelector.isLoading(state),
});

const mapDispatchToProps = {
  getGeolocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

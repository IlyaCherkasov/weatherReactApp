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

class App extends React.Component {
  constructor(props) {
    super(props);
    let userLocation = {
      latitude: 59.860656899999995,
      longitude: 30.317027299999996,
    };
    this.state = { userLocation: userLocation };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({ userLocation: location.coords })
    });
  }

  render() {

    const {loading} = this.props;
    console.log(this.state.userLocation);
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

export default App;

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getGeolocation } from '../geolocation/actions';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 30pt;
  font-weight: 500;
  color: #85898C;
`;

const RefreshButton = styled.button`
  background-color: #C9D2D7;
  color: #869197;
  border: none;
  border-radius: 5px;
  margin-left: calc(50% - 350px);
  padding: 15px 45px;
  font-weight: 600;
`;


function Header(props) {
  const { refresh } = props;
  return (
    <Container>
      <Text>Погода здесь</Text>
      <RefreshButton onClick={refresh}>Обновить геолокацию</RefreshButton>
    </Container>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getGeolocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

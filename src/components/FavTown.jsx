import React from 'react';
import styled from 'styled-components';
import InfoBlock from './InfoBlock';
import Preloader from "./Preloader";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 46px;
`;

const TownContainer = styled.div`
  width: 45%;
  margin-bottom: 20px; 
`;

const Name = styled.div`
  font-size: 26pt;
  font-weight: 700;
  color: #71848B;
`;

const Temperature = styled.div`
  font-size: 26pt;
  color: #71848B;
  display: ${props => props.show ? 'inherit' : 'none'};
`;

const Icon = styled.div`
  width: 50px;
  height: 40px;
  float: left;
  border: 3px solid #71848B;
  text-align: center;
  color: #6E8084;
  font-size: 10pt;
  display: ${props => props.show ? 'inherit' : 'none'};
  
  p {
    margin: 1px 0;
  }
`;

const Close = styled.button`
  transform: rotate(45deg);
  border: none;
  background-color: #708189;
  color: #ffffff;
  border-radius: 50%;
  padding: 0 14px;
  font-size: 25pt;
`;

function FavTown(props) {
  const { name, temperature, loading } = props;
  return (
      <TownContainer>
        <Header>
          <Name>{name}</Name>
          <Temperature show={!loading}>{temperature}</Temperature>
          <Icon show={!loading}>
            <p>Иконка погоды</p>
          </Icon>
          <Close>+</Close>
        </Header>
        {loading
          ? <Preloader small/>
          : <InfoBlock />}
      </TownContainer>
  );
}

export default FavTown;

import React from 'react';
import styled from 'styled-components';
import FavTown from './FavTown';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const Text = styled.div`
  font-size: 30pt;
  font-weight: 500;
  color: #85898C;
`;

const NewCityInput = styled.input`
  border: none;
  background-color: #F1F1F1;
  color: #8B9396;
  padding: 0 12px;
  width: 400px;
  margin-right: 20px;
  border-radius: 2px;
  height: 100%;
`;

const AddButton = styled.button`
  border: none;
  background-color: #708189;
  color: #ffffff;
  border-radius: 50%;
  padding: 0 14px;
  font-size: 25pt;
`;

const Towns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  flex-wrap: wrap;
`;

function Favourites(props) {
  const { townList } = props;
  return (
    <>
      <Header>
        <Text>Избранное</Text>
        <form style={{ display: 'flex' }}>
          <NewCityInput placeholder="Добавить новый город" />
          <AddButton type="submit" onClick={e => e.preventDefault()}>+</AddButton>
        </form>
      </Header>
      <Towns>
        {townList && townList.map(town => (
          <FavTown
            name="Moscow"
            temperature="8°С"
          />
        ))}
      </Towns>
    </>
  );
}

export default Favourites;

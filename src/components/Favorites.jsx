import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FavTown from './FavTown';
import * as favoritesSelector from '../favorites/selectors';
import { getFavorites, addFavorite } from '../favorites/actions';

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
  width: 50px;
  height: 50px;
  font-size: 25pt;
`;

const Towns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  flex-wrap: wrap;
`;

class Favorites extends React.Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  handleAddClick (e) {
    e.preventDefault();
    if (e.target[0].value !== '') {
      this.props.addFavorite(e.target[0].value);
      e.target[0].value = '';
    }
  }

  render() {
    const { favorites } = this.props;
    return (
      <>
        <Header>
          <Text>Избранное</Text>
          <form style={{display: 'flex'}} onSubmit={e => this.handleAddClick(e)} data-testid="form">
            <NewCityInput placeholder="Добавить новый город"/>
            <AddButton type="submit">+</AddButton>
          </form>
        </Header>
        <Towns>
          {favorites  && favorites.map(townName => (
            <FavTown
              key={townName}
              name={townName}
            />
          ))}
        </Towns>
      </>
    );
  }
}

const mapStateToProps = state => ({
  favorites: favoritesSelector.getFavorites(state),
});

const mapDispatchToProps = {
  getFavorites,
  addFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

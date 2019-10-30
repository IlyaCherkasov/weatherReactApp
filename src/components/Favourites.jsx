import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FavTown from './FavTown';
import * as favouritesSelector from '../favourites/selectors';
import { getFavourites, addFavourite } from '../favourites/actions';

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

class Favourites extends React.Component {
  componentDidMount() {
    this.props.getFavourites();
  }

  handleAddClick (e) {
    e.preventDefault();
    if (e.target[0].value !== '') {
      this.props.addFavourite(e.target[0].value);
      e.target[0].value = '';
    }
  }

  render() {
    const { favourites } = this.props;
    return (
      <>
        <Header>
          <Text>Избранное</Text>
          <form style={{display: 'flex'}} onSubmit={e => this.handleAddClick(e)}>
            <NewCityInput placeholder="Добавить новый город"/>
            <AddButton type="submit">+</AddButton>
          </form>
        </Header>
        <Towns>
          {favourites && favourites.map(townName => (
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
  favourites: favouritesSelector.getFavourites(state),
});

const mapDispatchToProps = {
  getFavourites,
  addFavourite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);

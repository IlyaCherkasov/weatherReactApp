import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import FavTown from './FavTown';
import { store } from '../helpers/store';

// TODO: test different combinations of error and loading
describe('FavTown component', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <FavTown />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
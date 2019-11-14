import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Favourites from './Favourites';
import { store } from '../helpers/store';

describe('Favourites component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Favourites />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
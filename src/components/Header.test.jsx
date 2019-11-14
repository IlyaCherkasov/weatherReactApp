import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './Header';
import { store } from '../helpers/store';

describe('Header component', () => {
  const refresh = jest.fn();
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Header refresh={refresh} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
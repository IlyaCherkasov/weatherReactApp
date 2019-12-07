import React from 'react';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Favourites from './Favourites';
import { store } from '../helpers/store';

// TODO: render with function from global state
describe('Favourites component', () => {
  it('should render correctly', () => {
    const { container, getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <Favourites />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.change(getByPlaceholderText('Добавить новый город'), { target: { value: 'Moscow' }});
    expect(getByPlaceholderText('Добавить новый город').value).toBe('Moscow');
    // submit - synthetic event that options should be written
    fireEvent.submit(getByTestId('form'), { target: [{ value: 'Moscow' }] });
    expect(container.firstChild).toMatchSnapshot();
  });
});
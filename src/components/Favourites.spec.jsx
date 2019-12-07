import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux as render } from "../helpers/renderWith";
import Favourites from './Favourites';

describe('Favourites component', () => {
  it('should render correctly without children', () => {
    const { container, getByPlaceholderText, getByTestId } = render(<Favourites />);
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.change(getByPlaceholderText('Добавить новый город'), { target: { value: 'Moscow' }});
    expect(getByPlaceholderText('Добавить новый город').value).toBe('Moscow');
    // submit - synthetic event that options should be written
    fireEvent.submit(getByTestId('form'), { target: [{ value: 'Moscow' }] });
  });

  it('should render correctly with children', () => {
    const { container } = render(<Favourites />, { initialState: { favourites: { favourites: ['Moscow'] } } });
    expect(container).toMatchSnapshot();
  });
});
import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux as render } from "../helpers/renderWith";
import Favourites from './Favourites';

describe('Favourites component', () => {
  it('should render correctly without children', () => {
    const { container, getByPlaceholderText, getByTestId } = render(<Favourites />, {});
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.change(getByPlaceholderText('Добавить новый город'), { target: { value: 'Moscow' }});
    expect(getByPlaceholderText('Добавить новый город').value).toBe('Moscow');
    // submit - synthetic event that options should be written
    fireEvent.submit(getByTestId('form'), { target: [{ value: 'Moscow' }] });
  });

  it('should render correctly with children', () => {
    const { container } = render(<Favourites />, { initialState: {
      favourites: { favourites: ['Moscow'] },
      weather: { namedWeather: {
          Moscow:  { weather: {
              main: { temp: 283, pressure: 10000, humidity: 10 },
              weather: [{ icon: 10 }],
              wind: { speed: 10, deg: 10 },
              clouds: { all: 10 },
              coord: { lon: 10, lat: 10 },
            } }  } }
      } });
    expect(container).toMatchSnapshot();
  });
});
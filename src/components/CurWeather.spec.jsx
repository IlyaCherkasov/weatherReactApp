import React from 'react';
import 'jest-styled-components';
import { renderWithRedux as render } from "../helpers/renderWith";
import CurWeather from './CurWeather';

describe('CurWeather component', () => {
  it('should render correctly', () => {
    const { container } = render(<CurWeather />, {
      initialState: {
        weather: {
          weather: {
            name: 'SPb',
            main: { temp: 283, pressure: 10000, humidity: 10 },
            weather: [{ icon: 10 }],
            wind: { speed: 10, deg: 10 },
            clouds: { all: 10 },
            coord: { lon: 10, lat: 10 },
          }
        }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
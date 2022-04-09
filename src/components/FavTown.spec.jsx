/* eslint-disable no-native-reassign */
import React from 'react';
import 'jest-styled-components';
import { waitFor } from '@testing-library/react';
import { renderWithRedux as render } from "../helpers/renderWith";
import FavTown from './FavTown';

describe('FavTown component', () => {
  it('should render with loading', () => {
    const { container } = render(<FavTown name="Moscow" />, {
      initialState: {
        weather: {
          namedWeather: {
            Moscow:  {
              weather: {
                main: { temp: 283, pressure: 10000, humidity: 10 },
                weather: [{ icon: 10 }],
                wind: { speed: 10, deg: 10 },
                clouds: { all: 10 },
                coord: { lon: 10, lat: 10 },
              }
            }
          }
        }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without error', async () => {
    const realFetch = fetch;
    fetch = jest.fn().mockResolvedValue({ ok: true, json: () => { return {
        main: { temp: 283, pressure: 10000, humidity: 10 },
        weather: [{ icon: 10 }],
        wind: { speed: 10, deg: 10 },
        clouds: { all: 10 },
        coord: { lon: 10, lat: 10 },
      } } });
    const { container, getByText } = render(<FavTown name="Moscow" />, {});
    await waitFor(() => expect(getByText('Ветер')).toBeDefined());
    expect(container.firstChild).toMatchSnapshot();
    fetch = realFetch;
  });


  it('should render with error (ok false)', async () => {
    const realFetch = fetch;
    fetch = jest.fn().mockResolvedValue({ ok: false, json: () => { return { message: 'sample error' } } });
    const { container, getByText } = render(<FavTown name="Moscow" />);
    await waitFor(() => expect(getByText('sample error')).toBeDefined());
    expect(container.firstChild).toMatchSnapshot();
    fetch = realFetch;
  });

  it('should render with error (server error)', async () => {
    const realFetch = fetch;
    fetch = jest.fn().mockRejectedValue({ message: 'sample error' });
    const { container, getByText } = render(<FavTown name="Moscow" />);
    await waitFor(() => expect(getByText('sample error')).toBeDefined());
    expect(container.firstChild).toMatchSnapshot();
    fetch = realFetch;
  })
});
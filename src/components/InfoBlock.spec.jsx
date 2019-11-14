import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import InfoBlock from './InfoBlock';

describe('InfoBlock component', () => {
  const weather = {
    wind: { speed: 10, deg: 10 },
    clouds: { all: 10 },
    main: { pressure: 10000, humidity: 10 },
    coord: { lon: 10, lat: 10 },
  };
  it('should render correctly', () => {
    const { container } = render(<InfoBlock weather={weather} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
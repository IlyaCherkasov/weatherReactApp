import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Preloader from './Preloader';

describe('Preloader component', () => {
  const repeat = jest.fn();
  const error = 'Some error';
  it('should render small with error', () => {
    const { container } = render(
      <Preloader
        repeat={repeat}
        small
        error={error}
      />
      );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render big with error', () => {
    const { container } = render(
      <Preloader
        repeat={repeat}
        error={error}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render small without error', () => {
    const { container } = render(
      <Preloader
        repeat={repeat}
        small
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render big without error', () => {
    const { container } = render(
      <Preloader
        repeat={repeat}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
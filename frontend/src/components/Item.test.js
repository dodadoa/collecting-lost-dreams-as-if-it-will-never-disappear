import React from 'react'
import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('<Item />', () => {
  test('should disabled the button if pass the props disabled', () => {
    const props = {
      id:1,
      price: 1,
      owned: 1,
      disabled: true,
      handleClick: () => {}
    }
    render(<Item {...props} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  })
});

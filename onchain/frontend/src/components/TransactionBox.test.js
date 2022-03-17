import React from 'react'
import { render, screen } from '@testing-library/react';
import TransactionBox from './TransactionBox';

describe('<Transaction />', () => {
  test('should render correctly given props', () => {
    const props = {
        receiverAddress: "0x00A",
        itemId: 1,
        itemPrice: 200000000000000000
    }
    render(<TransactionBox {...props} />);
    const displayText = screen.getByText(/Please transfer 0.2 ETH to 0x00A/i);
    expect(displayText).toBeInTheDocument();
  })
});

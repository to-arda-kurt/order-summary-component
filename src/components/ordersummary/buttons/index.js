import React from 'react';
import { ButtonsWrapper, Button } from './style';

const Buttons = () => {
  return (
    <>
      <ButtonsWrapper>
        <Button> Proceed to Payment</Button>
        <Button passive> Cancel Order</Button>
      </ButtonsWrapper>
    </>
  );
};

export default Buttons;

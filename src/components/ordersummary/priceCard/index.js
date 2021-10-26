import React from 'react';
import {
  PriceTag,
  PriceTagCost,
  PriceTagDescription,
  PriceTagIcon,
  PriceTagChanger,
  PriceTagPlan,
} from './style';

const PriceCard = () => {
  return (
    <>
      <PriceTag>
        <PriceTagIcon src="/images/icon-music.svg"></PriceTagIcon>
        <PriceTagDescription>
          <PriceTagPlan>Annual Plan</PriceTagPlan>
          <PriceTagCost>$59.99/year</PriceTagCost>
        </PriceTagDescription>
        <PriceTagChanger>Change</PriceTagChanger>
      </PriceTag>
    </>
  );
};

export default PriceCard;

import PriceCard from './priceCard';
import Buttons from './buttons';
import {
  CardDetails,
  CardWrapper,
  Card,
  HeroImage,
  Title,
  Description,
} from './style';

const orderSummary = () => {
  return (
    <CardWrapper>
      <Card>
        <HeroImage src="/images/illustration-hero.svg" alt="Banner"></HeroImage>
        <CardDetails>
          <Title> Order Summary</Title>
          <Description>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </Description>
          <PriceCard />
          <Buttons />
        </CardDetails>
      </Card>
    </CardWrapper>
  );
};

export default orderSummary;

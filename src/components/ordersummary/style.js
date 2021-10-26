import styled from 'styled-components';

export const CardDetails = styled.div`
  padding: 0 24px;
  @media only screen and (min-width: 460px) {
    padding: 0 48px;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  background: white;
  border-radius: 20px;
  text-align: center;
  width: 327px;
  height: 567px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media only screen and (min-width: 460px) {
    width: 450px;
    height: 697px;
  }
`;

export const HeroImage = styled.img``;

export const Title = styled.h1`
  color: #1f2e55;
  font-style: normal;
  font-weight: 900;
  line-height: 29px;
  font-size: 22px;
  padding: 32px 0 0 0;
  @media only screen and (min-width: 460px) {
    padding: 44px 0 0 0;
    font-size: 28px;
  }
`;

export const Description = styled.p`
  color: #717fa6;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  padding: 16px 0 0 0;
  @media only screen and (min-width: 460px) {
    font-size: 16px;
  }
`;

import styled from 'styled-components';

export const PriceTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 81px;
  background: #f7f9ff;
  border-radius: 11px;
  margin: 22px 0 0 0;
  @media only screen and (min-width: 460px) {
    height: 98px;
  }
`;

export const PriceTagIcon = styled.img``;

export const PriceTagDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const PriceTagPlan = styled.h2`
  font-weight: 900;
  font-size: 14px;
  line-height: 19px;
  margin: 0;
  color: #1f2e55;
  @media only screen and (min-width: 460px) {
    font-size: 16px;
  }
`;

export const PriceTagCost = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #717fa6;
  margin: 0;
  @media only screen and (min-width: 460px) {
    font-size: 16px;
  }
`;

export const PriceTagChanger = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  text-decoration-line: underline;
  line-height: 17px;
  color: #382ae1;
  transition: 0.3s;
  @media only screen and (min-width: 460px) {
    font-size: 16px;
  }

  &:hover {
    text-decoration-line: none;
    color: #766cf1;
    cursor: pointer;
  }
`;

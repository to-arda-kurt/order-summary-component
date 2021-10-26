import OrderSummary from './components/ordersummary';
import styled, { createGlobalStyle } from 'styled-components';
import mobilePatternSVG from './assets/img/pattern-background-mobile.svg';
import desktopPatternSVG from './assets/img/pattern-background-desktop.svg';

const App = () => {
  const order = { cycle: 'Annual Plan', cost: 59.99, currency: '$' };

  const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 1em;
    font-family: 'Red Hat Display', sans-serif;
    background-color: hsl(225, 100%, 94%);
  }
`;

  const PatternSVG = styled.div`
    background-image: url(${mobilePatternSVG});
    background-repeat: no-repeat;
    width: 100vw;

    @media only screen and (min-width: 376px) {
      background-image: url(${desktopPatternSVG});
      background-repeat: no-repeat;
      background-size: contain;
    } ;
  `;

  return (
    <>
      <GlobalStyle />
      <PatternSVG>
        <OrderSummary order={order} />
      </PatternSVG>
    </>
  );
};

export default App;

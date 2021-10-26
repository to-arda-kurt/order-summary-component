import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 22px;
`;

export const Button = styled.button`
  filter: ${(props) =>
    props.passive ? '' : ' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'};
  background: ${(props) => (props.passive ? 'none' : '#382ae1')};
  box-shadow: ${(props) =>
    props.passive ? '' : ' 0px 20px 20px rgba(56, 42, 225, 0.190291)'};
  border-radius: 11px;
  border: none;
  padding: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: ${(props) => (props.passive ? '#717FA6' : '#ffffff')};
`;

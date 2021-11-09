import styled from "@emotion/styled";


export const PrimaryButton = styled.button`
  max-width: 333px;
  width: 100%;
  height: 61px;
  background: #191826;
  border-radius: 12px;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.18px;
  color: #FCFAF9;
  cursor: pointer;
  margin: 8px 0px;
  border-style: none;

  &:hover {
    background: #66E2DC;
    color: #FCFAF9;
  }
`;


export const SecondButton = styled.button`
  max-width: 333px;
  width: 100%;
  height: 61px;
  background: #FCFAF9;
  border-radius: 12px;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.18px;
  color: #191826;
  margin: 8px 0px;
  border-style: none;
  cursor: pointer;

  &:hover {
    background: #FFB964;
    color: #191826;
  }

`;
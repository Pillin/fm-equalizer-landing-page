import styled from "@emotion/styled"
import { PrimaryButton, SecondButton } from "./Buttons"
import { H1, H2, P2 } from "./Typography"
import { ReactComponent as IconAndroid } from "../assets/icon-android.svg";
import { ReactComponent as IconApple } from "../assets/icon-apple.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: #FA7453;
  border-radius: 12px;
  width: 100%;
  max-width: 446px;
  color: white;
  position: absolute;
  z-index: 4;
  > * {
    max-width: 333px;
  }

   bottom: -360px;

   @media (min-width: 426px) {
      padding: 54px 54px;
      right: 54px;
      bottom: -115px;
   }
`;

const Row = styled.section`
   display: flex;
   align-items: center;
`;

const Card = () => {
  return <Container>
    <H2>Premium EQ</H2>
    <P2>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</P2>
    <Row><H1>$4</H1><P2>/ month</P2></Row>
    <PrimaryButton><IconApple /> iOS Download</PrimaryButton>
    <SecondButton><IconAndroid /> Android Download</SecondButton>
  </Container>
};

export default Card;
import styled from "@emotion/styled";
import Social from "./Social";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { P2 } from "./Typography";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 80px;
  gap: 24px 24px;
  width: 100%;
  padding: 48px 16px;

  p {
    max-width: 370px;
  }

  svg.logo {
    width: 100%;
  }

  @media (min-width: 426px) {
    padding: 48px 0px;
  }

  @media (min-width: 769px) {
    svg.logo {
      width: auto;
    }
  }

`;

const Footer = () => {
  return <Container>
    <Logo className="logo" />
    <P2>
      All rights reserved © Equalizer 2021
      Have any problems? Contact us via social media or email us at <b>equalizer@example.com</b>
    </P2>
    <Social />
  </Container>
};

export default Footer;
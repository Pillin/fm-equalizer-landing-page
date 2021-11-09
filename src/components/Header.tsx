import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { H1, P1 } from "./Typography";

const Container = styled.header`
  padding: 64px 16px;

  @media (min-width: 426px) {
    padding: 64px 0px;
  }
`;

const Content = styled.section`
  max-width: 825px;
  width: 100%;

  h1 {
    margin: 80px 0px 48px 0px;
  }

  @media (min-width: 426px) {
     h1 {
      margin: 104px 270px 64px 0px;
    }
  }

  @media (min-width: 769px) {
    h1 {
      margin: 104px 0px 48px 0px;
    }
  }

`;

const Header = () => {
  return <Container>
    <Logo />
    <Content>
      <H1>We make your music sound extraordinary.</H1>
      <P1>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</P1>
    </Content>
  </Container>
};

export default Header;
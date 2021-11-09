import styled from "@emotion/styled";
import { ReactComponent as IconInstagram } from "../assets/icon-instagram.svg";
import { ReactComponent as IconFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";

const Container = styled.section`
  min-width: 170px;
  display: flex;
  justify-content: space-between;
  align-self: center;
  svg {
    &:hover path {
      fill: #FA7453;
    }
  }
`;

const Social = () => {
  return <Container>
    <IconFacebook />
    <IconInstagram />
    <IconTwitter />

  </Container>
}

export default Social;
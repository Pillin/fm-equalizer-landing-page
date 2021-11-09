import styled from "@emotion/styled";
import { ReactComponent as Pattern } from "../assets/bg-pattern-2.svg";
import Card from "./Card";
import { IMG } from "./Image"

const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 200px 0px 360px 0px;

  @media (min-width: 426px) {
    padding: 200px 0px 115px 0px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #191826;
  border-radius: 12px;
  position: relative;
  height: 600px;
  justify-content: center;

  picture {
    position: absolute;
    z-index: 3;
    top: -200px;
  }

  @media (min-width: 426px) {
    picture {
      position: absolute;
      z-index: 3;
      top: -200px;
      left: 80px;
    }
  }
`;

const img = {
  mobile: "/assets/illustration-app.png",
  desktop: "/assets/illustration-app.png",
  tablet: "/assets/illustration-app.png",
  alt: "/assets/illustration-app.png",
  style: {
    width: "312px",
    aspectRatio: "642 / 312"
  }
};


const Box = () => {
  return <Container>
    <Content>
      <IMG {...img} />
      <Pattern />
      <Card />
    </Content>
  </Container>
}

export default Box;
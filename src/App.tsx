import styled from "@emotion/styled";
import { ReactComponent as Pattern } from "./assets/bg-pattern-1.svg";
import Box from "./components/Box";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { IMG } from "./components/Image";

const Container = styled.main`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  picture {
    position: absolute;
    z-index: -1;
  }

  svg.pattern {
    position: absolute;
    right: 0px;
    top: 0px;
    display: none;
  }

  @media (min-width: 426px) {
     svg.pattern {
       width: 270px;
       display: inline;
     }
  }

  @media (min-width: 769px) {
    svg.pattern {
       width: 312px;
       display: inline;
     }
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1158px;
  padding: 0px;
  width: 100%;

  @media (min-width: 426px) {
    padding: 0px 24px;
  }
`;

const img = {
  mobile: "/assets/bg-main-mobile.png",
  tablet: "/assets/bg-main-tablet.png",
  desktop: "/assets/bg-main-desktop.png",
  alt: "",
  style: {}
}

function App() {
  return (
    <Container>
      <IMG {...img} />
      <Pattern className="pattern" />
      <Content>
        <Header />
        <Box />
        <Footer />
      </Content>
    </Container>
  );
}

export default App;

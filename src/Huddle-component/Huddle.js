import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";
import content from "../content";

const theme = {
  // *For theme nesting of objects is done and we will be using them as props and at children we right away destucture.
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function Huddle() {
  return (
    // *We need to wrap themeprovider on all components so that theme and styles be applied across all components.
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default Huddle;

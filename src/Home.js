import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <BodyWrapper>
      <ContainerWrapper>
        <h1>Twinblend</h1>
        <NavWrapper>
          <ul>
            <li>
              <Link to="/huddle" style={linkStyle}>
                Huddle
              </Link>
            </li>
            <li>
              <Link to="/pizzas" style={linkStyle}>
                Pizza-Menu
              </Link>
            </li>
            <li>
              <Link to="/huddle" style={linkStyle}>
                Huddle
              </Link>
            </li>
            <li>
              <Link to="/pizza" style={linkStyle}>
                Pizza-Menu
              </Link>
            </li>
            <li>
              <Link to="/huddle" style={linkStyle}>
                Huddle
              </Link>
            </li>
            <li>
              <Link to="/pizza" style={linkStyle}>
                Pizza-Menu
              </Link>
            </li>
            <li>
              <Link to="/huddle" style={linkStyle}>
                Huddle
              </Link>
            </li>
            <li>
              <Link to="/pizza" style={linkStyle}>
                Pizza-Menu
              </Link>
            </li>
          </ul>
        </NavWrapper>
      </ContainerWrapper>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.body`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");
  background-color: #6f1d1b;
  background-image: url("images/multiblend.jpg");
  background-size: cover;

  height: 100vh;
  color: #ffe6a7;
  font-family: "Poppins", sans-serif;
`;

const ContainerWrapper = styled.div`
  padding: 16px 32px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    color: #bb9457;
    font-size: 64px;
    @media (max-width: 900px) {
      font-size: 48px;
    }
    @media (max-width: 700px) {
      font-size: 32px;
    }
  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#ffe6a7",
};

const NavWrapper = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      font-size: 28px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 700px) {
      font-size: 24px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Home;

import styled from "styled-components";

export const StyledFooter = styled.footer`
  /* Here the props are destructured as its a object we are using parentheis to wrap */
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }
  /* Here the props are destructured as its a object we are using parentheis to wrap */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;

import styled from "styled-components";

const StyledHeader = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;

  a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  a.logo {
    font-size: 25px;
    font-weight: bold;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  a.active {
    background-color: dodgerblue;
    color: white;
  }

  .header-right {
    float: right;
  }

  @media screen and (max-width: 500px) {
    a {
      float: none;
      display: block;
      text-align: left;
    }

    .header-right {
      float: none;
    }
  }
`;
const Header = ({ children }) => {
  return <StyledHeader className="header">{children}</StyledHeader>;
};

export default Header;

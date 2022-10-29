import React from 'react';

// style
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <h1>가계부</h1>
      <span>수입부터 소득, 저축까지!<br />손 쉽게 관리하세요!</span>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  min-width: 375px;
  max-width: 800px;
  width: 100%;
  height: 80px;
  color: #333;

  h1 {
    margin-right: 10px;
    font-size: 30px;
    font-family: 'Fira Sans', sans-serif;
  }
  span {
    font-size: 12px;
  }
`
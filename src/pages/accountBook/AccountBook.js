import React from 'react';
import styled from 'styled-components';
import Data from './InputData';
import List from './List';

const AccountBook = () => {
  return (
    <Container>
      <Data />
      <List />
    </Container>
  )
}

export default AccountBook

const Container = styled.div`
  margin: 30px auto 0;
  min-width: 375px;
  max-width: 800px;
  width: 100%;
  background-color: #fff;
`
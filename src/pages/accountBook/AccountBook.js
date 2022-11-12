import MonthSelector from 'components/MonthSelector';
import React, { useState } from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import Data from './InputData';
import List from './List';

const AccountBook = () => {
  const [date, setDate] = useState(new Date());

  const dateFormat = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}년 ${month}월`;
  }

  return (
    <Container>
      <MonthSelector 
        date={date}
        setDate={setDate}
        dateFormat={dateFormat}
      />
      <Chart />
      <Data />
      <List 
        date={date}
      />
    </Container>
  )
}

export default AccountBook

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`
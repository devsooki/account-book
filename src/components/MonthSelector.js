import React, { useState } from 'react';

// style
import styled from 'styled-components';
import { getNextMonth, getPrevMonth } from 'utils/date';

const MonthSelector = () => {
  const [date, setDate] = useState(new Date());

  const dateFormat = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}년 ${month}월`;
  }

  const onClickPrevMonth = () => {
    setDate(getPrevMonth(date))
  }

  const onClickNextMonth = () => {
    setDate(getNextMonth(date))
  }

  return (
    <Container>
      <button onClick={onClickPrevMonth}>
        ◀
      </button>
      <b>{dateFormat()}</b>
      <button onClick={onClickNextMonth}>
        ▶
      </button>
    </Container>
  )
}

export default MonthSelector

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  min-width: 375px;
  max-width: 800px;
  height: 50px;
  color: #333;
  
  b {
    margin: 0 10px;
    width: 120px;
    font-size: 20px;
    text-align: center;
  }
  button {
    width: 20px;
    height: 20px;
    background-color: rgba(0,0,0,0);
  }
`
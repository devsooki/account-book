import React from 'react';

// utils
import { getNextMonth, getPrevMonth } from 'utils/date';

// style
import styled from 'styled-components';

const MonthSelector = ({...props}) => {
  const {
    date,
    setDate,
    dateFormat
  } = props

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
  padding: 10px;
  width: 100%;
  min-width: 375px;
  max-width: 800px;
  height: 50px;
  color: #333;
  
  b {
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
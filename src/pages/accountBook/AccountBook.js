import React, { useEffect, useState } from 'react';

// components
import Chart from './Chart';
import Data from './InputData';
import List from './List';
import MonthSelector from 'components/MonthSelector';

// utils
import { keyDateFormat } from 'utils/date';
import { loadLocalStorage } from 'utils/localstorage';

// style
import styled from 'styled-components';

const AccountBook = () => {
  const dateFormat = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}년 ${month}월`;
  }

  const [date, setDate] = useState(new Date());
  const [list, setList] = useState(loadLocalStorage('accountBook'));

  useEffect(() => {
    setList(loadLocalStorage('accountBook'))
  }, [list])

  return (
    <Container>
      <MonthSelector 
        date={date}
        setDate={setDate}
        dateFormat={dateFormat}
      />
      {
        list && list.filter(f => f.key === keyDateFormat(date)).length !== 0 && (
          <Chart 
            list={list}
          />
        )
      }
      <Data />
      <List 
        date={date}
        list={list}
      />
    </Container>
  )
}

export default AccountBook

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`
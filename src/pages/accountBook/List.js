import React from 'react';
import styled from 'styled-components';
import { loadLocalStorage } from 'utils/localstorage';

const List = () => {
  const list = loadLocalStorage('accountBook')

  return (
    <Container>
      {
        list && list.map(item => (
          <Content>
            <div
              className={
                item.type === '수입' 
                  ? 'type income' 
                  : item.type === '지출' 
                    ? 'type expense'
                    : 'type saving'
                }
            >
              {item.type}
            </div>
            <div className="date">{item.date}</div>
            <div className="content">{item.content}</div>
          </Content>
        ))
      }
    </Container>
  )
} 

export default List

const Container = styled.div`
  padding: 20px;
  width: 100%;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;

  .type {
    padding: 0 20px 0 0;
    font-weight: bold;

    &.income {
      color: red;
    }
    &.expense {
      color: blue;
    }
    &.saving {
      color: green;
    }
  }
  .date {
    padding: 0 20px 0 0;
  }
  .content {
    flex: 1;
  }
`
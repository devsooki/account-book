import React from 'react';
import styled from 'styled-components';
import { loadLocalStorage } from 'utils/localstorage';

const List = ({ ...props }) => {
  const {
    date
  } = props

  const list = loadLocalStorage('accountBook')
  const dateFormat = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}${month}`;
  }

  return (
    <Container>
      {
        list && list.filter(f => f.key === dateFormat()).map(item => (
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
            <div className="price">{item.price}원</div>
            <div className="content">
              <span>{item.content}</span>
              <span className="date">{item.date}</span>
            </div>
          </Content>
        ))
      }
    </Container>
  )
} 

export default List

const Container = styled.div`
  padding: 0 20px 20px 20px;
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
  .price {
    width: 300px;
  }
  .content {
    display: flex;
    flex-direction: column;

    .date {
      color: #666;
      font-size: 10px;
    }
  }
`
import React from 'react';
import styled from 'styled-components';
import { keyDateFormat } from 'utils/date';
import { loadLocalStorage } from 'utils/localstorage';

const List = ({ ...props }) => {
  const {
    date,
    list
  } = props
  return (
    <Container>
      {list === null || (list && list.filter(f => f.key === keyDateFormat(date)).length === 0) ? (
        <EmptyContainer>
          {date.getMonth()+1}월엔 입력된 내용이 없어요🥲
        </EmptyContainer>
      ) : (
        list && list
        .filter(f => f.key === keyDateFormat(date))
        .map((item, index) => (
          <Content
            key={index}
          >
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
            <div className="price">{item.price.toLocaleString()}원</div>
            <div className="content">
              <span>{item.content}</span>
              <span className="date">{item.date}</span>
            </div>
          </Content>
        ))) 
      }
    </Container>
  )
} 

export default List

const Container = styled.div`
  padding: 0 20px 20px 20px;
  width: 100%;
  background-color: #fff;
`
const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #666;
  font-size: 14px;
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
import React, { useEffect, useState } from 'react'

// globla
import { TEXT_TYPE } from 'gloabls/option'

// style
import styled from 'styled-components'

const Chart = ({ ...props }) => {
  const {
    list
  } = props
  const [textType, setTextType] = useState(TEXT_TYPE[0].value)

  const totalIncome = list && list.filter(f => f.type === '수입').reduce((acc, cur) => {
    return acc + cur.price
  }, 0)

  const totalExpense = list && list.filter(f => f.type === '지출').reduce((acc, cur) => {
    return acc + cur.price
  }, 0)

  const totalSaving = list && list.filter(f => f.type === '저축').reduce((acc, cur) => {
    return acc + cur.price
  }, 0)

  useEffect(() => {
    if (totalExpense > totalSaving) {
      setTextType(TEXT_TYPE[0].value)
    } else {
      setTextType(TEXT_TYPE[1].value)
    }
  }, [totalExpense, totalSaving])


  const chartData = [
    {
      label: '수입',
      per: 100,
      color: 'red',
      price: totalIncome
    },
    {
      label: '지출',
      per: +(totalExpense / totalIncome).toFixed(2) * 100,
      color: 'blue',
      price: totalExpense
    }, {
      label: '저축',
      per: +(totalSaving / totalIncome).toFixed(2) * 100,
      color: 'green',
      price: totalSaving
    }
  ]

  return (
    <Container>
      <Content
        className="chart"
      >
        {
          chartData.map((data, index) => (
            <LineChart 
                key={index}
                per={data.per} 
                color={data.color}
              >
                <ChartText>
                  {data.price.toLocaleString()}원
                </ChartText>
                <ChartLabel>
                  {data.label}
                </ChartLabel>
              </LineChart>
          ))
        }
      </Content>
      <Content
        className="text"
      >
        {
          textType === TEXT_TYPE[0].value ? (
            <>
              이번달은 지출이 저축보다 많아요!<br />
              다음달엔 조금 더 절약해볼까요?🔥
            </>
          ) : (
            <>
              이번달은 저축이 지출보다 많아요!<br />
              참 잘했어요!✨
            </>
          )
        }
      </Content>
    </Container>
  )
}

export default Chart

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
  width: 800px;
  height: 300px;
  background-color: #fff;
`
const Content = styled.div`
  display: flex;
  padding: 50px 10px 0;
  width: 50%;
  height: 100%;

  &.chart {
    align-items: flex-end;
    justify-content: space-between;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  &.text {
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
`
const LineChart = styled.div`
  position: relative;
  width: 100px;
  height: ${props => `${props.per}%`};
  background-color: ${props => props.color};
  opacity: 0.6;
`
const ChartText = styled.div`
  position: absolute;
  top: -13px; left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
`
const ChartLabel = styled.div`
  position: absolute;
  bottom: -20px; left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
`
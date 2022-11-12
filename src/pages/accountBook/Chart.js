import React from 'react'
import styled from 'styled-components'
import { loadLocalStorage } from 'utils/localstorage'

const Chart = () => {


  const list = loadLocalStorage('accountBook')

  const totalIncome = list && list.filter(f => f.type === '수입').reduce((acc, cur) => {
    return acc + cur.price
  }, 0)

  const totalExpense = list && list.filter(f => f.type === '지출').reduce((acc, cur) => {
    return acc + cur.price
  }, 0)

  const totalSaving = list && list.filter(f => f.type === '저축').reduce((acc, cur) => {
    return acc + cur.price
  }, 0)


  const chartData = [
    {
      label: '수입',
      per: 100,
      color: 'red'
    },
    {
      label: '지출',
      per: +(totalExpense / totalIncome).toFixed(2) * 100,
      color: 'blue'
    }, {
      label: '저축',
      per: +(totalSaving / totalIncome).toFixed(2) * 100,
      color: 'green'
    }
  ]

  console.log( chartData)

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
            />
          ))
        }
      </Content>
      <Content>

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
  padding-top: 50px;
  width: 50%;
  height: 100%;

  &.chart {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`
const LineChart = styled.div`
  width: 100px;
  height: ${props => `${props.per}%`};
  background-color: ${props => props.color};
  opacity: 0.6;
`
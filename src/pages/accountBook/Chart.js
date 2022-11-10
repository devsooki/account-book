import React from 'react'
import styled, { keyframes } from 'styled-components'
import { loadLocalStorage } from 'utils/localstorage'

const Chart = () => {
  const chartData = [
    {
      label: '지출',
      per: 0.75
    }, {
      label: '저축',
      per: 0.25
    }
  ]


  const list = loadLocalStorage('accountBook')


  return (
    <Container>
      {
        chartData.map(data => (
          <Content>
            <Label>{data.label}</Label>
            <svg viewBox="0 0 200 200">
              <Circle cx="100" cy="100" r="80" fill="none" stroke="#fffad7" strokeWidth="30" />
              <Circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#ff9f9f"
                strokeWidth="30"
                strokeDasharray={`${2 * Math.PI * 80 * 0.50} ${2 * Math.PI * 80 * 0.50}`}
                strokeDashoffset={2 * Math.PI * 80 * 0.75}
              />
            </svg>
          </Content>
        ))
      }
    </Container>
  )
}

export default Chart

// const chartAnimate = keyframes`
// 	0% {
//     stroke-dasharray: 0 ${2 * Math.PI * 80};
//   }
// `;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 30px 50px;
  min-width: 375px;
  max-width: 800px;
  width: 100%;
  height: 300px;
  background-color: #fff;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 250px;
  height: 300px;
`
const Label = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 13px;
`
const Circle = styled.circle`

`
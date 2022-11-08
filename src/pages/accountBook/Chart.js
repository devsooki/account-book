import React from 'react'
import styled from 'styled-components'

const Chart = () => {
  return (
    <Container>
      <ChartContent>
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="beige" strokeWidth="20" />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="green"
            strokeWidth="20"
            strokeDasharray={2 * Math.PI * 90 * 0.75}
          />
        </svg>
      </ChartContent>
      <ChartContent>
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="beige" strokeWidth="20" />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="green"
            strokeWidth="20"
            strokeDasharray={2 * Math.PI * 90 * 0.75}
          />
        </svg>
      </ChartContent>
      <ChartContent>
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="beige" strokeWidth="20" />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="green"
            strokeWidth="20"
            strokeDasharray={2 * Math.PI * 90 * 0.75}
          />
        </svg>
      </ChartContent>
    </Container>
  )
}

export default Chart

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  min-width: 375px;
  max-width: 800px;
  width: 100%;
  height: 400px;
  background-color: #fff;
`
const ChartContent = styled.div`
  width: 200px;
`
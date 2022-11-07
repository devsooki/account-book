import React from 'react'
import styled from 'styled-components'

const Chart = () => {
  return (
    <Container>
      <ChartContent>

      </ChartContent>
    </Container>
  )
}

export default Chart

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 375px;
  max-width: 800px;
  width: 100%;
  height: 400px;
  background-color: #fff;
`
const ChartContent = styled.div`
  width: 300px;
  height: 300px;
  background-color: yellow;
  border-radius: 50%;
  background: conic-gradient(
    red 30%,
    blue 50%,
    green 100%
  );
`
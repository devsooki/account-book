import React from 'react'
import styled from 'styled-components'

const Chart = () => {
  return (
    <Container>
      그래프영역
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
  height: 300px;
  background-color: #fff;
`
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import styled from 'styled-components'

const Chart = () => {
  return (
    <Container>
      <PieChart
        data={[
          { title: 'One', value: 10, color: '#FF8DC7' },
          { title: 'Two', value: 15, color: '#FFACC7' },
          { title: 'Three', value: 20, color: '#FFDDD2' },
        ]}
        animate
      />
    </Container>
  )
}

export default Chart

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 30px 0;
  min-width: 375px;
  max-width: 800px;
  width: 100%;
  height: 400px;
  background-color: #fff;
`
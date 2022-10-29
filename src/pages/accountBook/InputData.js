import React from 'react'
import styled from 'styled-components'

const InputData = () => {
  return (
    <Container>
      <InputContent>
        <b>수입</b>
        <Input />
      </InputContent>
      <InputContent>
        <b>지출</b>
        <Input />
      </InputContent>
      <InputContent>
        <b>저축</b>
        <Input />
      </InputContent>
    </Container>
  )
}

export default InputData

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 100px;
`
const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  b {
    margin-bottom: 10px;
  }
`
const Input = styled.input`
  padding: 5px;
  width: 100%;
  font-size: 16px;
  background: none;
  border: 0;
  border-bottom: 1px solid #666;
`
import React, { useState } from 'react'
import styled from 'styled-components'

const InputData = () => {
  const [income, setIncome] = useState(null)
  const [expense, setExpense] = useState(null)
  const [saving, setSaving] = useState(null)

  const onChange = (e, type) => {
    const {
      target: { value }
    } = e
    const onlyNumber = value.replace(/[^0-9]/g, '')

    if (type === 'income') {
      setIncome(onlyNumber)
    } else if (type === 'expense') {
      setExpense(onlyNumber)
    } else if (type === 'saving') {
      setSaving(onlyNumber)
    }
  }

  return (
    <Container>
      <InputContent>
        <b>수입</b>
        <Input 
          value={income}
          onChange={e => onChange(e, 'income')}
          placeholder={0}
        />
      </InputContent>
      <InputContent>
        <b>지출</b>
        <Input 
          value={expense}
          onChange={e => onChange(e, 'expense')}
          placeholder={0}
        />
      </InputContent>
      <InputContent>
        <b>저축</b>
        <Input 
          value={saving}
          onChange={e => onChange(e, 'saving')}
          placeholder={0}
        />
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
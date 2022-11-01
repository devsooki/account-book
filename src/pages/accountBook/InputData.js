import { OPTIONS } from 'gloabls/option'
import React, { useState } from 'react'
import styled from 'styled-components'
import { createDateKey } from 'utils/date'
import { loadLocalStorage, saveLocalStorage } from 'utils/localstorage'

const InputData = () => {
  const [type, setType] = useState('')
  const [price, setPrice] = useState(null)

  const onChange = (e, type) => {
    const {
      target: { value }
    } = e
    const onlyNumber = value.replace(/[^0-9]/g, '')

    if (type === 'type') {
      setType(value)
    } else if (type === 'price') {
      setPrice(onlyNumber)
    }
  }
  
  const onClickSave = () => {
    const date = new Date()
    const prevAccountBook = loadLocalStorage('accountBook');
    const newAccountBook = { ...prevAccountBook, [createDateKey(date)]: {date: createDateKey(date), type: type, price: price} };

    saveLocalStorage('accountBook', newAccountBook)
    setType('')
    setPrice(null)
  }

  return (
    <Container>
      <InputContent>
        <Select>
          {OPTIONS.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.name}
            </option>
          ))}  
        </Select>
        <Input 
          value={type}
          onChange={e => onChange(e, 'type')}
          placeholder="항목을 입력해주세요."
        />
        <Input 
          value={price}
          onChange={e => onChange(e, 'price')}
          placeholder="0원"
        />
        <Button
          onClick={onClickSave}
        >
          저장
        </Button>
      </InputContent>
    </Container>
  )
}

export default InputData

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100px;
`
const InputContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const Select = styled.select`
  margin-right: 10px;
  width: 50px;
`
const Input = styled.input`
  margin-right: 10px;
`
const Button = styled.button`

`
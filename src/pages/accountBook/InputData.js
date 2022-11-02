import { OPTIONS } from 'gloabls/option'
import React, { useState } from 'react'
import styled from 'styled-components'
import { createDateKey } from 'utils/date'
import { loadLocalStorage, saveLocalStorage } from 'utils/localstorage'

const InputData = () => {
  const [type, setType] = useState('')
  const [price, setPrice] = useState(null)
  const [isSelect, setIsSelect] = useState(false)
  const [select, setSelect] = useState(OPTIONS[0].name)

  const onClickIsSelect = () => {
    setIsSelect(!isSelect)
  }

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
        <SelectContainer>
          <span onClick={onClickIsSelect}>
            {select}&nbsp;&nbsp;🔽
          </span>

          {
            isSelect && (
              <SelectContent>
                {OPTIONS.map(option => (
                  <li
                    key={option.value}
                    value={option.value}
                  >
                    {option.name}
                  </li>
                ))}
              </SelectContent>
            )
          }
        </SelectContainer>
        <Input 
          name="type"
          value={type}
          onChange={e => onChange(e, 'type')}
          placeholder="항목을 입력해주세요."
        />
        <Input 
          name="price"
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
const SelectContainer = styled.div`
  position: relative;
  margin-right: 10px;
  padding: 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
`
const SelectContent = styled.ul`
  position: absolute;
  top: 40px; left: 5px;
  width: 65px;
  border: 1px solid #ddd;
  border-radius: 10px;

  li {
    padding: 5px;
  }
  li:hover {
    background-color: #eee;
  }
  li:first-child {
    border-radius: 10px 10px 0 0;
  }
  li:last-child {
    border-radius: 0 0 10px 10px;
  }
`
const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    margin-right: 0;
  }
  &[name="type"] {
    flex: 1;
  }
  &[name="price"] {
    width: 150px;
    text-align: right;
  }
`
const Button = styled.button`
  padding: 10px;
  color: #fff;
  background-color: #666;
  border-radius: 10px;
`
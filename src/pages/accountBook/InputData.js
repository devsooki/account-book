import React, { useState } from 'react'

// global
import { OPTIONS } from 'gloabls/option'

// utils
import { createDateKey } from 'utils/date'
import { saveLocalStorage } from 'utils/localstorage'

// style
import styled from 'styled-components'

const InputData = () => {
  const [content, setConent] = useState('')
  const [price, setPrice] = useState(0)
  const [isType, setIsType] = useState(false)
  const [type, setType] = useState(OPTIONS[0])

  const onClickIsType = () => {
    setIsType(!isType)
  }

  const onClickSelect = type => {
    setType(type)
    setIsType(!isType)
  }

  const onChange = (e, type) => {
    const {
      target: { value }
    } = e
    const onlyNumber = value.replace(/[^0-9]/g, '')

    if (type === 'content') {
      setConent(value)
    } else if (type === 'price') {
      setPrice(Number(onlyNumber))
    }
  }
  
  const onClickSave = () => {
    const date = new Date();
    let value = {
      key: createDateKey(date, 'key'),
      date: createDateKey(date),
      type: type.name,
      content: content, 
      price: price
    }

    saveLocalStorage('accountBook', value)
    setConent('')
    setPrice(0)
    setType(OPTIONS[0])
  }

  return (
    <Container>
      <InputContent>
        <TypeContainer>
          <span onClick={onClickIsType}>
            {type.name}&nbsp;&nbsp;🔽
          </span>

          {
            isType && (
              <TypeContent>
                {OPTIONS.map(option => (
                  <li
                    key={option.value}
                    value={option.value}
                    onClick={()=>onClickSelect(option)}
                  >
                    {option.name}
                  </li>
                ))}
              </TypeContent>
            )
          }
        </TypeContainer>
        <Input 
          name="content"
          value={content}
          onChange={e => onChange(e, 'content')}
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
  background-color: #fff;
`
const InputContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const TypeContainer = styled.div`
  position: relative;
  margin-right: 10px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;

  span {
    display: block;
    padding: 10px;
  }
`
const TypeContent = styled.ul`
  position: absolute;
  top: 40px; left: 5px;
  width: 65px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  z-index: 99;

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
  &[name="content"] {
    flex: 1;
  }
  &[name="price"] {
    width: 200px;
    text-align: right;
  }
`
const Button = styled.button`
  padding: 10px;
  color: #fff;
  background-color: #666;
  border-radius: 10px;
`
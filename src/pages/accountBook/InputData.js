import { OPTIONS } from 'gloabls/option'
import React, { useState } from 'react'
import styled from 'styled-components'
import { createDateKey } from 'utils/date'
import { loadLocalStorage, saveLocalStorage } from 'utils/localstorage'

const InputData = () => {
  const [content, setConent] = useState('')
  const [price, setPrice] = useState(null)
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
      setPrice(onlyNumber)
    }
  }
  
  const onClickSave = () => {
    const date = new Date()
    const prevAccountBook = loadLocalStorage('accountBook');
    const newAccountBook = { 
      ...prevAccountBook, 
      [createDateKey(date)]: {date: createDateKey(date), type: type.name, content: content, price: price} 
    };

    saveLocalStorage('accountBook', newAccountBook)
    setConent('')
    setPrice(null)
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
  height: 100px;
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
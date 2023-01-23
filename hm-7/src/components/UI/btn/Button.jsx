import React from 'react'
import styled from 'styled-components'

const Button = ({ btnText, onClick}) => {
  return (
    <Btn onClick={onClick} >
      {btnText}
    </Btn>
  )
}

export default Button

const Btn = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 8px;
    background-color:blue;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    border: none;
    margin:10px 5px;
    &:active{
      background-color: #00014b;
    }
`
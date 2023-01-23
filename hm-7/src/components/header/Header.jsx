import React, { useState } from 'react'
import Form from '../form/Form'
import Modal from '../UI/Modal/Modal'
 import styled from "styled-components"

const HeaderBlock = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: blue;
     height: 70px;
`
const Caption = styled.h1`
    color: white;
    margin-left: 30px;
`
const ButtonModalForm =styled.button`
    width: 130px;
    height: 50px;
    border-radius: 12px;
    background-color: orange;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    border: none;
    margin-right: 30px;
`
const Header = ({ onAddNewList }) => {
  const [ isModalVisible, setIsModalVisible ] = useState(false)

  const modalVisible = () => {
     setIsModalVisible(prevState => !prevState)
  }
return (
<>
{isModalVisible ? <Modal  >
  <Form onAddNewList={onAddNewList} onClose={modalVisible}/>
</Modal> : null}
    <HeaderBlock>
        <Caption>Favourite Movies</Caption>
        <ButtonModalForm onClick={modalVisible}>ADD MOVE</ButtonModalForm>
    </HeaderBlock>
    </>
  )
}

export default Header


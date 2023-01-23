import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../../UI/Modal/Modal'

const ListItem = ({ title, img, rating, onDelete,id }) => {
    const [ isModalVisible, setIsModalVisible ] = useState(false)

    const modalVisible = () => {
       setIsModalVisible(prevState => !prevState)
    }
    const confirm = (event) =>{
      event.preventDefault();
      setIsModalVisible(false)
      onDelete(id)
    }
  return (
  <>
  {isModalVisible ? <Modal onClose={modalVisible} >
    <ModalText>Are you sure wanna delete?</ModalText>
    <ModalDeleteBtn> 
    <DeleteBtn1 onClick={modalVisible}>No</DeleteBtn1>
    <DeleteBtn2 onClick={confirm}>Yes</DeleteBtn2></ModalDeleteBtn> 
  </Modal> : null}


    <StyledListItem>
        <StyledImg className='img' src={img} alt="title" />
      <StyledListItemBlock>
        <Title>{title}</Title>
        <StyledBtnBlock> 
        <StyledSpan>{rating}5 stars</StyledSpan>
        <DeleteBtn onClick={modalVisible}>Delete</DeleteBtn>
        </StyledBtnBlock>
        </StyledListItemBlock> 
    </StyledListItem></>
  )
}

export default ListItem

const ModalText = styled.p`
      font-size: 20px;
`
const ModalDeleteBtn = styled.div`
  height: 50px;
  display:flex;
  justify-content: flex-end;
  align-items:flex-end;
`
const DeleteBtn1 = styled.button`
  width: 50px;
    height: 25px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color:  rgb(37, 37, 238);
    box-shadow: 0px 0px 5px 2px rgb(169, 153, 153);
`
const DeleteBtn2 = styled.button`
    width: 50px;
    height: 25px;
    border: none;
    background-color: rgb(37, 37, 238);
    color: white;
    border-radius: 5px;
    margin-left: 10px;
`
const StyledListItem = styled.div`
    width: 500px;
    height: 170px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 12px;
    box-shadow: 0px 0px 5px 3px rgb(190, 185, 185);
    margin-bottom: 20px;
`
const StyledImg = styled.img`
    width: 200px;
    height: 170px;
    border-radius: 12px 0px 0px 12px
`
const StyledListItemBlock = styled.div`
     padding: 30px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Title = styled.h2 `
height: 40px;
`
const DeleteBtn = styled.button`
    width: 100px;
    height: 30px;
    margin-right: 10px;
    background-color: rgb(255, 0, 0);
    color: white;
    border: none;
    font-size: 1.1rem;
    border-radius: 8px;
`
const StyledSpan = styled.button`
    width: 100px;
    height: 30px;
    margin-right: 10px;
    background-color: rgb(255, 196, 0);
    border: none;
    border-radius: 12px;
`
const StyledBtnBlock = styled.div`
margin-bottom: 40px;
`
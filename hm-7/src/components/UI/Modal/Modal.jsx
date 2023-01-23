import React from 'react'
import styled from 'styled-components'
import {createPortal  } from "react-dom";

const Modal = ({ onClose, children }) => {
  return (
    createPortal(
    <>
    <Backdrop onClick={onClose}></Backdrop>
    <Card>{children}</Card>
    </>,
     document.getElementById("modal")
    )
  )
}

export default Modal

const Card = styled.div`
    min-width: 350px;
    min-height: 130px;
    background-color: rgb(255, 255, 255);
    padding: 30px;
    border-radius: 8px; 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
`
import React from 'react'
import styled from 'styled-components'

const Inputs = ({ title,inpType, onChang, titleRef}) => {
  // console.log(ref);
  return (
    <div>
        <div> <label className='label'>{title}</label></div>   
        <Input type={inpType} onChange={onChang}ref={titleRef}/>
    </div>
  )
}

export default Inputs

const Input = styled.input`
    width: 400px;
    height: 30px;
    border: 1px solid rgb(146, 146, 153);
`
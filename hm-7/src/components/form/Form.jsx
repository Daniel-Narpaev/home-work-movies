import React, { useRef,} from 'react'
import Button from '../UI/btn/Button'
import Inputs from '../UI/Input/Inputs'
import styled from 'styled-components'

const Form = ({onAddNewList, onClose}) => { 
    
    const titleInputUseRef = useRef()
    const imgInputUseRef = useRef()
    const ratingInputUseRef = useRef()

    const saveHandler = (event) => {
        event.preventDefault();

        const newMovie = {
            id:Date.now(),
            title: titleInputUseRef.current.value,
            img: imgInputUseRef.current.value,
            rating: ratingInputUseRef.current.value,
        }
        console.log(newMovie);
     onAddNewList(newMovie)
     onClose()
    }
  return (
    <form>
        <Inputs 
        key={"title"}
        title="Movie Title"
        titleRef={titleInputUseRef}
        />
        <Inputs 
        key={"image"}
        title="Image URL"
        titleRef={imgInputUseRef}
        />
        <Inputs 
        key={"rating2"}
        title="Your rating"
        titleRef={ratingInputUseRef}
       />
        <DivBtn>
            <Button className='formBtn1' btnText="cansel" onClick={onClose}/>
            <Button className='formBtn2' btnText="ADD" onClick={saveHandler}/>
        </DivBtn>
    </form>
  )
}

export default Form

const DivBtn =styled.div`
width: 100%;
  display:flex;
  justify-content: flex-end;
  align-items:center;
`
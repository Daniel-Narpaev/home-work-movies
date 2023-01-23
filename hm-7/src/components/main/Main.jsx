import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem/ListItem'

const Ul = styled.ul`
    width:500px;
    margin: 20px auto;
`
const Main = ({ list, onDelete}) => {
  return (
    <Ul>
      {list.map((el)=>{
        return(
          <ListItem 
           id={el.id}
           title={el.title}
           img={el.img}
           rating={el.rating}
           onDelete={onDelete}
           />
        )
      })}
    </Ul>
    
  )
}

export default Main

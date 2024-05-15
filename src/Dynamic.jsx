import React, { useState } from 'react'
import './Dynamic.css'

const Dynamic = () => {
const [tableInput, settableInput] = useState([
    { id:'' ,name: '', email: '',salary:''}
])

 const add = () => {
  let newfield = {id : Math.floor(Math.random()*10000),name :'',email: '',salary:''}
  settableInput([...tableInput,newfield])
 }
 const remove = (id) =>{
    let updatedata=tableInput.filter((item) => item.id !=id);
  settableInput(updatedata)
 }
  return (
    <div align="center">
      <h1>Dynamic form</h1>
      <table border={1} cellSpacing={0} cellPadding={10}>
        <thead>
          <tr>
            <td><i>Full Name</i> </td>
            <td><i>Email Address</i></td>
            <td><i>Salary</i></td>
            <td><button onClick={() => add()}>+</button></td>
          </tr>
        </thead>
        <tbody>
            {
              tableInput.map((val,index)=>{
                return(
                  <tr key={val.id}>
                    <td><input type='text'/></td>
                    <td><input type='text'/></td>
                    <td><input type='text'/></td>
                    {
                      index !==0 &&(
                        <td><button onClick={() => remove(val.id)}>x</button></td>
                      )
                    }
                  </tr>
                )
              })
            }
        </tbody>
      </table> 
    </div>
  )
}

export default Dynamic
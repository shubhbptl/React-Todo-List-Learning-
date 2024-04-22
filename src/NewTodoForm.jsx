import { useState } from 'react'

export function NewTodoForm(props){
    const [newItem, setNewItem] = useState("")
    props.onSubmit
    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return
        props.onSubmit(newItem)
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <br/>
        <input type="text" value={newItem} id="item" onChange={e => setNewItem(e.target.value)}/>
      </div>
      <button className='btn'>Add</button>
    </form>
    )
}
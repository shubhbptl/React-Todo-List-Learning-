export function TodoItem({completed, id , title, toggleTodo, todoDelete}){
    return(
        <li>
        <label>
          <input type="checkbox" checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}/>
          {title}
        </label>
        <button className='btn btn-danger' onClick={() => todoDelete(id)}>Delete</button>
      </li>
    )

}
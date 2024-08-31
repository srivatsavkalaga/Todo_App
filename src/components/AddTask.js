import React from 'react'

export const AddTask = ({tasklist,setTasklist,task,setTask}) => {
  

    const handleSubmit = (e) => {

      if(task.id)
      {
        e.preventDefault();
        const date=new Date();
        const updatedTasklist=tasklist.map((todo) =>(
          todo.id===task.id ? {id: task.id,name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} :todo
        ));
        setTasklist(updatedTasklist);
        setTask({});
      }
      else{

      
      e.preventDefault();
      const date=new Date();
      const newTask={id:date.getTime(),name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
      setTasklist([...tasklist,newTask]);
      setTask({});
      }
    }
    return (
      <section className='addTask'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='task' value={task.name || ""} autocomplete='off' placeholder='add task' onChange={e => setTask({...task,name:e.target.value})}/>
          <button type='submit'>{task.id ? "Update":"Add"}</button>
        </form>
      </section>
  )
}


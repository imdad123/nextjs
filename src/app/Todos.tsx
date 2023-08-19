import React, { useEffect } from 'react'
import { useState } from 'react'
import useSWR from 'swr'
function Todos() {

    const [todos, setTodos] = useState<any[]>([])
    const [todo, setTodo] = useState<String>("")
    const fetcher = (url: string): any => fetch(url).then(r => r.json())
    const { data, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)
    const todoadd = () => {
        let obj: object = {
            userId: 1,
            id: todos.length + 1,
            title: todo,
            completed: false
        };
        todos.push(obj);
        setTodos([...todos]);
        setTodo('');
    }
   /* const callapi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
            .then(json => {
                //console.log(json);
               
                   // todos.push(title);
       setTodos([...json]);
            }
            )
    }*/
    useEffect(() => {
        if (!isLoading && data.length)
        {
            setTodos([...data])
           }
  },[data])
  return (
      <div>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <button onClick={todoadd}>Click ME</button>
          {
              todos.map((val, index) => {
                  return (
                      <p key={index} style={{color:val.completed ? 'blue':'gray'}}>
                        {val.id}  {val.title}
                    </p>  
                  );
              })
            }
    </div>
    )
   
}

export default Todos
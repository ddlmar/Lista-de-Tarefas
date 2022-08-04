import { useState } from "react"
import {Item} from './types/item'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'
function App() {
 
  const [list, setList] = useState<Item[]>([
    {id: 1, name:'Comprar pão', done: false},
    {id: 2, name:'Comprar bolo', done: false}
  ]);

  const handleAddTask = (taskName: string) => {
    let NewList = [...list]
    NewList.push({
      id: list.length++,
      name: taskName,
      done: false
    })
    setList(NewList)
  }

  return (
    <div className="flex flex-row justify-center bg-slate-900 w-screen h-screen  ">
      <div className=" text-slate-400 w-4/5  ">
        <header 
          className="py-4 text-4xl border-b-2 border-slate-400  text-center">
          Lista da Tarefas
        </header>
        <div className="flex-row my-3">
          <AddArea onEnter={handleAddTask}/>
          <div>
            {list.map((item, index)=>(
              <ListItem key={index} item={item} />
          
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
 
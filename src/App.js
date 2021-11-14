import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {


  const [tasks, setTasks] = useState([
    { id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true

    },

    { id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 pm',
        reminder: true

    },
    { id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 7th at 2:30 pm',
        reminder: false

    },

])
const deleteTask = (id) => {
  // console.log('Delete', id)
  setTasks(tasks.filter((task)=>id!==task.id

  ))
}

const toggleReminder = (id) => {
  // console.log('Toggle', id)
  setTasks(tasks.map((task) => 
    task.id === id ? {...task,reminder: !task.reminder}:task
  ))
}


const addTask = (task) => {
  console.log('Task Added', task)
  const id = Math.floor(Math.random() *1000) +1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}

const [addShowTask, setAddShowTask] = useState(false)

  return (
    <div className='container'>
      
      <Header onAdd={()=> setAddShowTask(!addShowTask)} showAddTask ={addShowTask}/>
      {addShowTask && <AddTask addTask ={addTask}/> }
      {tasks.length > 0 ? <Tasks tasks ={tasks} iyerDeletes ={deleteTask} toggle ={toggleReminder}/>: 'No Tasks'}
      
    </div>
  );
}

export default App;

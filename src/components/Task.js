
import {FaTimes} from 'react-icons/fa'

const Task = ({ task,iyerDeletes,toggle2 }) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder':''}`} onDoubleClick={ ()=> (toggle2(task.id))}>
            <h3> {task.text} <FaTimes style ={{color:'red'}} onClick={() => (iyerDeletes(task.id))}  /></h3>
            <p> {task.day}</p>
            
        </div>
    )
}

export default Task

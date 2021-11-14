import Task from './Task'


const Tasks = ({ tasks, iyerDeletes, toggle }) => {
    
    

    return (
        <>
            {tasks.map((task)=>(

            <Task key ={task.key} task ={task} iyerDeletes={iyerDeletes} toggle2 ={toggle}/>

            ))}

            
        </>
    )
}

export default Tasks

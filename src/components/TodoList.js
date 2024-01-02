import React,{useEffect, useState} from 'react'
import CreateTask from '../modals/createTask'
import CardModel from './CardModel';


const TodoList = ()=> {
    const [modal, setModal]= useState(false);
    const [taskList,setTaskList]= useState([]);
    const toggle =()=>{
        setModal(!modal);
    }
    const saveTask =(taskObj) =>{
        let templist = taskList;
        templist.push(taskObj);
        localStorage.setItem("taskList",JSON.stringify(templist));
        setTaskList(templist);
        setModal(false);
    }
    useEffect(()=>{
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj=JSON.parse(arr);
            setTaskList(obj)
        }
    },[]);
    const deleteTask = (index) =>{
        let templist = taskList;
        templist.splice(index,1);
        localStorage.setItem("taskList",JSON.stringify(templist))
        setTaskList(templist);
        window.location.reload();
    }
    const updateListArray=(obj,index)=>{
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList",JSON.stringify(tempList));
    setTaskList(tempList)
    window.location.reload();
    }
    return (

        <>
            <div className='header container-flex text-center'>
                <h3 className=''>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={()=>setModal(true)}>Create Task</button>
                
            </div>
            <div className='container'>
                <div className='task-container row'>
                        {taskList && taskList.map((obj,index) =>
                    <CardModel taskObj={obj} index={index} deleteTask ={deleteTask}
                    updateListArray={updateListArray}/>
                    
                        
                    ) }
                    </div>
                </div>
            
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
            </>

    )
}

export default TodoList
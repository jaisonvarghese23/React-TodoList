
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


    const EditTask =({modal, toggle,updateTask,taskObj})=>{
   const [task, setTask] = useState('');
   const [description, setDescription] = useState('');
   const handleChange = (e) => {
    const {name , value}=e.target
    if(name === "task"){

        setTask(value)
    }
    else{
        setDescription(value)
    }

   }

   useEffect(()=>{
    setTask(taskObj.Name)
    setDescription(taskObj.Description);
   },[]);
  const handleUpdate=(e)=>{
  e.preventDefault();
  let tempObj={}
  tempObj['Name']=task
  tempObj['Description']=description

  updateTask(tempObj)

  


  }

    
    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                   <form>
                    <div className='form-group'>
                        <label htmlFor="">Task Name</label>
                        <input className='form-control mt-1' type="text" name="task" value={task} onChange={handleChange} required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Description</label>
                        <textarea className='form-control mt-1' name="description"  value={description} onChange={handleChange} rows="5" required></textarea>

                    </div>
                   </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate} >
                     Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
    }

export default EditTask
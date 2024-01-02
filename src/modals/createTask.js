import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


    const CreateTask =({modal, toggle,save})=>{
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
   const handleSave =() =>{
    let taskObj ={};
    taskObj['Name'] = task;
    taskObj['Description'] = description;
    save(taskObj);
   }
    
    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                   <form>
                    <div className='form-group'>
                        <label htmlFor="">Task Name</label>
                        <input className='form-control mt-1' type="text" name="task" value={task} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Description</label>
                        <textarea className='form-control mt-1' name="description"  value={description} onChange={handleChange} rows="5" required></textarea>

                    </div>
                   </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave} >
                      Create Task
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
    }

export default CreateTask
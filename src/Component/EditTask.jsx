import React ,{useState} from 'react'
import { Modal , button , FromControl } from 'react-bootstrap'


const EditTask = ({taskData}) => {
    const [show , setShow] = useState(false);

     const handleClose =() => setShow (false);
     const handleShow =() => setShow (true);
     const [newDescription,  setnewDescription] =useState('')
     const handleChange=(e)=>
} 

    return (
        <div>
    <button variant="primary"   onClick={handleShow }  >
        EditTask

    </button>

        </div>
    )
}

export default EditTask

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const AddEmployeeForm = props => {

    const initialFormState = { id: null, fName: '', lName: '', age: '' }
    const [employee, setEmployee] = useState(initialFormState)

    const InputChange = event => {
        const {name, value} = event.target
        setEmployee({...employee, [name]: value})
    }

    return(
        <form
            onSubmit={event => {
                event.preventDefault()

                if (!employee.fName || !employee.lName || !employee.age) return

                props.addEmp(employee)
                setEmployee(initialFormState)
            }}
        >
            <div>
                <TextField 
                    size="small" 
                    id="outlined-search" 
                    label="First Name" 
                    fullWidth
                    type="text" 
                    variant="outlined" 
                    margin="dense"
                    name="fName"
                    value={employee.fName}
                    onChange={InputChange}
                    />
            </div>
            <div>
                <TextField 
                    size="small" 
                    id="outlined-search" 
                    label="Last Name" 
                    fullWidth
                    type="text" 
                    variant="outlined" 
                    margin="dense"
                    name="lName"
                    value={employee.lName}
                    onChange={InputChange}
                    />
            </div>
            <div>

                <TextField 
                    size="small" 
                    id="outlined-search" 
                    label="Age" 
                    fullWidth
                    type="text"
                    name="age" 
                    variant="outlined" 
                    margin="dense"

                    value={employee.age}
                    onChange={InputChange}
                    />
            </div>
            <div>
                <Button variant="contained" size="small" color="primary"> Submit </Button>
            </div>
        </form>
    )
}

export default AddEmployeeForm
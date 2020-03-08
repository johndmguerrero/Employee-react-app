import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EmployeeEdit = props =>{

    const [employee, setEmployee] = useState(props.currentEmployee)

    const instInputChange = event => {
        const { name, value } = event.target
        setEmployee({...employee,[name]: value})
    }

    return(
        <form
            onSubmit={event => {
                event.preventDefault()
                props.upEmployee(employee.id,employee)
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
                    onChange={instInputChange}
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
                    onChange={instInputChange}
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
                    onChange={instInputChange}
                    />
            </div>
            <div>
                <Button variant="contained" onClick={() => props.setEdit(false)} m={3} size="small" color="primary"> Submit </Button>
            </div>
        </form>
    )
}


export default EmployeeEdit
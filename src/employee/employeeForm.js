import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const AddEmployeeForm = props => {

    const initialFormState = { id: null, fName: '', lName: '', age: '' }
    const [employees, setEmployees] = useState(initialFormState)

    const InputChange = event => {
        const {name, value} = event.target

        setEmployees({...employees, [name]: value})
    }

    return(
        <form
            onSubmit={event => {
                event.preventDefault()

                if (!employees.fName || !employees.lName || !employees.age) return

                props.addEmployee(employees)
                setEmployees(initialFormState)
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
                    value={employees.fName}
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
                    value={employees.lName}
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

                    value={employees.age}
                    onChange={InputChange}
                    />
            </div>
            <div>
                <Button variant="contained" m={3} size="small" color="primary"> Submit </Button>
            </div>
        </form>
    )
}

export default AddEmployeeForm
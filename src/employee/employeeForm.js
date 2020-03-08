import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const AddEmployeeForm = props => {

    const initialFormState = { id: null, fName: '', lName: '', age: '' }

    const [employee, setEmployee] = useState(initialFormState)

    const InputChange = event => {
        const { name, value } = event.target
        setEmployee({ ...employee, [name]: value})
    }

    return(
        <form
            onSubmit={event => {
                // console.log(3)
                event.preventDefault()

                if (!employee.fName || !employee.lName || !employee.age) return

                props.addEmployee(employee)
                setEmployee(initialFormState)
            }}
        >
            <div>
                <TextField 
                    size="small" 
                    id="outlined-fname" 
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
                    id="outlined-lname" 
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
                    id="outlined-age" 
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
                <Button type="submit" variant="contained" size="small" color="primary"> Submit </Button>
            </div>
        </form>
    )
}

export default AddEmployeeForm
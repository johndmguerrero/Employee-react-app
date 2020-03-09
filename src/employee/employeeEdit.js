import React, { useState , useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const EmployeeEdit = props =>{

    useEffect(()=>{
        setEmployee(props.currentEmployee)
    }, [props])

    const [employee, setEmployee] = useState(props.currentEmployee)

    const instInputChange = event => {
        const { name, value } = event.target
        setEmployee({...employee,[name]: value})
    }

    return(
        <Box component={Paper}>
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
                <Button type="submit" variant="contained" m={3} size="small" color="primary"> Update </Button>
            </div>
        </form>
        </Box>
    )
}


export default EmployeeEdit
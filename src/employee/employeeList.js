import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const employeeList = props =>(
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Actions</TableCell>
            </TableHead>
            <TableBody>
                    {props.employees.length > 0 ?(
                        props.employees.map(employee =>(
                            <TableRow key={employee.id}>

                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.fName}</TableCell>
                                <TableCell>{employee.lName}</TableCell>
                                <TableCell>{employee.age}</TableCell>
                                <TableCell>
                                    <Button 
                                        variant="contained" 
                                        m={3} 
                                        size="small"
                                        
                                        onClick={() => {
                                            props.editEmployee(employee)
                                        }}
                                        > Edit </Button>
                                    <Button 
                                        variant="contained" 
                                        m={3} 
                                        size="small" 
                                        color="secondary"

                                        onClick={()=> props.delEmployee(employee.id)}
                                    > Delete </Button>
                                </TableCell>

                            </TableRow>
                        ))
                    ) : (
                        <TableCell colSpan={5}>
                            No Employee Yet
                        </TableCell>
                    )}                 

            </TableBody>
        </Table>
    </TableContainer>

)

export default employeeList

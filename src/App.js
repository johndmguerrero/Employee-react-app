import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmployeeListing from './employee/employeeList';
import EmployeeForm from './employee/employeeForm';


function App() {
  const employeesData = [
    {id: 1,fName: 'john',lName: 'guerrero',age: '21'},
    {id: 2,fName: 'Mark',lName: 'guerrero',age: '21'},
    {id: 3,fName: 'john',lName: 'guerrero',age: '21'},
  ]

  const [employees, setEmployees] = useState(employeesData) 

  const addEmployee = employee =>{
    employee.id = employees.length + 1
    setEmployees([...employees, employee])
  }

  return (
    <Container fixed>
      <h1>John Guerrero</h1>
      <p>Hi LeanDev, as promise here's my sample of React Project</p>
      <Grid container spacing={3}>
        <Grid item xs={6} component={Paper}>
          <EmployeeForm addEmployee={addEmployee}/>
        </Grid>
        <Grid item xs={6}>
          <EmployeeListing employees={employees}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

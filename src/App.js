import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmployeeListing from './employee/employeeList';
import EmployeeForm from './employee/employeeForm';
import EmployeeEditForm from './employee/employeeEdit';


function App() {

  // int employee data
  const employeesData = [
    {id: 1,fName: 'john',lName: 'guerrero',age: '21'},
    {id: 2,fName: 'Mark',lName: 'guerrero',age: '21'},
    {id: 3,fName: 'john',lName: 'guerrero',age: '21'},
  ]

  // 
  const [employees, setEmployees] = useState(employeesData) 


  const addEmployee = employee =>{
    employee.id = employees.length + 1
    console.log('3')
    setEmployees([ ...employees, employee ])
  }

  const delEmployee = id =>{
    setEmployees(employees.filter(employees => employees.id !== id))
  }

  // edit employee
  const [edit, setEdit] = useState(false)

  const initialFormState = { id: null, fName: '', lName: '', age: ''}
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState)

  const editEmployee = employee =>{
    setEdit(true)
    setCurrentEmployee({
      id: employee.id,
      fName: employee.fName,
      lName: employee.lName,
      age: employee.age
    })
  }

  // update employee
  const upEmployee = (id,update) =>{
    setEdit(false)
    console.log(id)
    setEmployees(employees.map(employee => (employee.id === id ? update : employee)))
  }

  return (
    <Container fixed >
      <h1>John Guerrero</h1>
      <p>Hi LeanDev, as promise here's my sample of React Project</p>
      <Grid container spacing={3}>
        <Grid item xs={6} component={Paper}>
          { edit ? (
            <EmployeeEditForm 
              edit={edit}
              setEdit={setEdit}
              currentEmployee={currentEmployee}
              upEmployee={upEmployee}
            />
          ) : (
            <EmployeeForm addEmployee={addEmployee}/>
          )}

        </Grid>
        <Grid item xs={6}>



          <EmployeeListing employees={employees} 
          delEmployee={delEmployee} 
          editEmployee={editEmployee}
          
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

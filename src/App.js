import React, { useState } from 'react';
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
  const upEmployee = (id,updateEmployee) =>{
    setEdit(false)
    console.log(id)
    setEmployees(employees.map(employee => (employee.id === id ? updateEmployee : employee)))
  }

  return (
    <div style={{maxWidth: "500px",display: "block", margin: "auto" }}>
      <h1>John Guerrero</h1>
      <p>Hi LeanDev, as promise here's my sample of React Project</p>

      <div className="ui-form">
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
      </div>
        <div className="employee-listing">

          <EmployeeListing employees={employees} 
          delEmployee={delEmployee} 
          editEmployee={editEmployee}
          
          />
        </div>      
    </div>
  );
}

export default App;

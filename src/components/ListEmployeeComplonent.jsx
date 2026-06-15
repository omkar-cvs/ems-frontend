import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComplonent = () => {

      const [employees,setEmployees] =  useState([])  

      useEffect(()=>{
            listEmployees().then((response)=>{
              // Access 'empVo' inside the data object
            console.log("Checking data:", response.data.empVo);
              setEmployees(response.data.empVo);
            }).catch(error=>{
              console.error(error);
            }) 
      },[])

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                 <tr>
                    <th> Id</th>
                    <th> Dept Id</th>
                    <th> Name</th>
                    <th> Job</th>
                    <th> Salary</th>
                  </tr>
            </thead>
            <tbody>
                 {
                     employees.map(employee=>
                          <tr  key={employee.id}>
                              <td>{employee.id} </td>
                              <td>{employee.deptId} </td>
                              <td>{employee.name} </td>
                              <td>{employee.job} </td>
                              <td>{employee.salary} </td>
                          </tr>
                      
                     )
                 }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComplonent
import React, { useState } from 'react'

const EmployeeComponent = () => {

  const  [deptId,setDeptId] = useState('')
  const  [name,setName] = useState('')
  const  [job,setJob] = useState('')
  const  [salary,setSalary] = useState('')

function handleName(e){
    setName(e.target.value);
 }

function handleJob(e){
    setJob(e.target.value);
}

function handleSalary(e){
    setSalary(e.target.value);
 }

function handleDeptId(e){
    setDeptId(e.target.value);
}

function saveEmmployee(e){
    e.preventDefault();

    const employee={name,job,salary,deptId}
    console.log(employee);
}
 

  return (
    <div className='container'>
      <br></br>
        <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h2 className='text-center'>Add Employee</h2>
                  <div className='card-body'>
                      <form>
                        
                          <div className='form-group mb-2'> 
                              <babel className='form-label'>Name</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Name'
                                    name='name'
                                    value={name}
                                    className='form-control'
                                    onChange={handleName}
                              >                              
                              </input>

                          </div>

                           <div className='form-group mb-2'> 
                              <babel className='form-label'>Job</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Job'
                                    name='job'
                                    value={job}
                                    className='form-control'
                                    onChange={handleJob}
                              >                              
                              </input>
                          </div>

                          <div className='form-group mb-2'> 
                              <babel className='form-label'>Salary</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Salary'
                                    name='salary'
                                    value={salary}
                                    className='form-control'
                                    onChange={handleSalary}
                              >                              
                              </input>
                          </div>

                            <div className='form-group mb-2'> 
                              <babel className='form-label'>DeptId</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Dept Id'
                                    name='deptId'
                                    value={deptId}
                                    className='form-control'
                                    onChange={handleDeptId}
                              >                              
                              </input>
                          </div>
                          <button className='btn btn-success' onClick={saveEmmployee} >Submit</button>
                      </form>
                  </div>
              </div> 
        </div> 
    </div>
  )
}

export default EmployeeComponent
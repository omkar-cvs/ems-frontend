import React, { useState } from 'react'

const EmployeeComponent = () => {

  const  [deptId,setDeptId] = useState('')
  const  [name,setName] = useState('')
  const  [job,setJob] = useState('')
  const  [salary,setSalary] = useState('')

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
                                    onChange={(e) => setName(e.target.value)}
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
                                    onChange={(e) =>  setJob(e.target.value)}
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
                                    onChange={(e) => setSalary(e.target.value)}
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
                                    onChange={(e) => setDeptId(e.target.value)}
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
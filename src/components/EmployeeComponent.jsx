import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee } from '../services/EmployeeService'
import { useNavigate, useParams} from 'react-router-dom'


const EmployeeComponent = () => {

  const  [deptId,setDeptId] = useState('')
  const  [name,setName] = useState('')
  const  [job,setJob] = useState('')
  const  [salary,setSalary] = useState('')

  const {id} =useParams();

  const [errors,setErrors] = useState({           
        name:'',
        name:'',
        salary:'',
        deptId:'' 
  })

  const navigator= useNavigate();
  
  useEffect(()=> {
        if (id) {
            getEmployee(id).then((response) => {
                // response.data.empVo is the list, [0] is the employee object
                const employeeData = response.data.empVo[0]; 
                
                setName(employeeData.name);
                setJob(employeeData.job);
                setSalary(employeeData.salary);
                setDeptId(employeeData.deptId);
            }).catch(error => {
                console.error("Error fetching employee:", error);
        });
    }

  },[id])

function saveEmmployee(e){
    e.preventDefault();

   if(validateForm()){
              const employee={
                  empId: null, // Set this if you have an ID, otherwise null
                  empVo: {
                      name: name,
                      job: job,
                      salary: Number(salary), // Ensure this matches the Integer type
                      deptId: Number(deptId)  // Ensure this matches the Long type
                  }
              }
              console.log(employee);

              createEmployee(employee).then((response)=>{
                  console.log(response.data);
                  navigator('/employees');
              })
    }
}
 
function validateForm(){
   let valid = true;
   const errorsCopy = {... errors}
    if(name.trim()){
        errorsCopy.name='';
    }else{
        errorsCopy.name='First name is required';
        valid=false;
    }

    if(job.trim()){
        errorsCopy.job='';
    }else{
        errorsCopy.job='First job is required';
        valid=false;
    }

    if(salary.trim()){
        errorsCopy.salary='';
    }else{
        errorsCopy.salary='First salary is required';
        valid=false;
    }

    if(deptId.trim()){
        errorsCopy.deptId='';
    }else{
        errorsCopy.deptId='First dept id is required';
        valid=false;
    }

    setErrors(errorsCopy);

    return valid;
}

function pageTitle(){
    if(id){
          return <h2 className='text-center'> Update Employee</h2>
    }else{
          return <h2 className='text-center'> Add Employee</h2>
    }
}

  return (
    <div className='container'>
      <br></br>
        <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                      pageTitle()
                    }
                  <div className='card-body'>
                      <form>
                        
                          <div className='form-group mb-2'> 
                              <babel className='form-label'>Name</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Name'
                                    name='name'
                                    value={name}
                                    className={` form-control ${ errors.name ? 'is-invalid':'' }`}
                                    onChange={(e) => setName(e.target.value)}
                              >                              
                              </input>
                              { errors.name && <div className='invalid-feedback'> {errors.name}  </div> }

                          </div>

                           <div className='form-group mb-2'> 
                              <babel className='form-label'>Job</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Job'
                                    name='job'
                                    value={job}
                                    className={` form-control ${ errors.job ? 'is-invalid':'' }`}
                                    onChange={(e) =>  setJob(e.target.value)}
                              >                              
                              </input>
                               { errors.job && <div className='invalid-feedback'> {errors.job}  </div> }
                          </div>

                          <div className='form-group mb-2'> 
                              <babel className='form-label'>Salary</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Salary'
                                    name='salary'
                                    value={salary}
                                    className={` form-control ${ errors.salary ? 'is-invalid':'' }`}
                                    onChange={(e) => setSalary(e.target.value)}
                              >                              
                              </input>
                              { errors.salary && <div className='invalid-feedback'> {errors.salary}  </div> }
                          </div>

                            <div className='form-group mb-2'> 
                              <babel className='form-label'>DeptId</babel>
                              <input
                                    type='text'
                                    placeholder='Enter Employee Dept Id'
                                    name='deptId'
                                    value={deptId}
                                    className={` form-control ${ errors.deptId ? 'is-invalid':'' }`}
                                    onChange={(e) => setDeptId(e.target.value)}
                              >                              
                              </input>
                              { errors.deptId && <div className='invalid-feedback'> {errors.deptId}  </div> }
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
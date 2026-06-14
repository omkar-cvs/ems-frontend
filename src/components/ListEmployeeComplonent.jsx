import React from 'react'

const ListEmployeeComplonent = () => {

  const dummyData=[
    {
      "id":1,
      "firstName":"Omkar",
      "lastName":"Singh",
      "email":"omkar@gmail.com"
    },
    {
      "id":2,
      "firstName":"Ram",
      "lastName":"Lal",
      "email":"ram@gmail.com"
    },
    {
      "id":3,
      "firstName":"Shyam",
      "lastName":"Pandey",
      "email":"shyam@gmail.com"
    }
  ]



  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                 <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                  </tr>
            </thead>
            <tbody>
                 {
                     dummyData.map(employee=>
                          <tr  key={employee.id}>
                              <td>{employee.id} </td>
                              <td>{employee.firstName} </td>
                              <td>{employee.lastName} </td>
                              <td>{employee.email} </td>
                          </tr>
                      
                     )
                 }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComplonent
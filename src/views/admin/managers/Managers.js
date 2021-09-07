import React, { useState } from 'react'
import Axios from 'axios'
import '../../../assets/css/style.css'

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'

//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'

function Managers() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [office, setOffice] = useState('')
  const [age, setAge] = useState(0)
  const [start_date, setStart_date] = useState({ varOne: new Date() })
  const [salary, setSalary] = useState(0)
  const [managersList, setManagersList] = useState([])
  const getManagers = () => {
    Axios.get('http://localhost:3001/list').then((response) => {
      setManagersList(response.data)
    })
  }
  const addManagers = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      position: position,
      office: office,
      age: age,
      start_date: start_date,
      salary: salary,
    }).then(() => {
      setManagersList([
        ...managersList,
        {
          name: name,
          position: position,
          office: office,
          age: age,
          start_date: start_date,
          salary: salary,
        },
      ])
    })
  }

  return (
    <div className="MainDiv">
      <div className="jumbotron bg-sky">
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="col-md-6">
            <label>Position</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setPosition(event.target.value)
              }}
            />
          </div>
          <div className="col-md-6">
            <label>Office</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setOffice(event.target.value)
              }}
            />
          </div>
          <div className="col-md-6">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              onChange={(event) => {
                setAge(event.target.value)
              }}
            />
          </div>
          <div className="col-md-6">
            <label>Start date</label>
            <input
              type="date"
              className="form-control"
              onChange={(event) => {
                setStart_date(event.target.value)
              }}
            />
          </div>
          <div className="col-md-6">
            <label>Salary</label>
            <input
              type="number"
              className="form-control"
              onChange={(event) => {
                setSalary(event.target.value)
              }}
            />
          </div>
          <div className="col-md-12 text-center">
            <button className="btn btn-success btn-sm" onClick={addManagers}>
              Submit
            </button>
            <input type="hidden" className="showList" onClick={getManagers} />
          </div>
        </div>
      </div>
      <div className="container">
        <table id="example" className="display">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {managersList.map((val, index) => (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.position}</td>
                <td>{val.office}</td>
                <td>{val.age}</td>
                <td>{val.start_date}</td>
                <td>{val.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

class App extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      setTimeout(() => {
        $('#example').DataTable()
      }, 100)
      $('.showList').trigger('click')
    })
  }
  render() {
    return <Managers />
  }
}
export default App

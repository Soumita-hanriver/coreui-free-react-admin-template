import React, { useState } from 'react'
import Axios from 'axios'
import '../../../assets/css/style.css'
import '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'
import { useForm } from 'react-hook-form'

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'

//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'
import {
  // CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  // CForm,
  // CFormControl,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

function Managers() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const validate = () => {
    let errors = {}
    let isValid = true
    if (typeof password !== 'undefined' && typeof confirm_password !== 'undefined') {
      if (password !== confirm_password) {
        isValid = false
        $('#confirm_password_error').html('Confirm Password doesnot match')
      } else {
        $('#confirm_password_error').html('')
      }
    }

    return isValid
  }
  const onSubmit = () => {
    if (validate()) {
      Axios.post('http://localhost:3001/register', {
        username: username,
        email: email,
        password: password,
      }).then(() => {
        window.location.href = '/login'
      })
    } else {
      console.log('gfyuguyg')
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1>Register</h1>
                <p className="text-medium-emphasis">Create your account</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-12">
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <FontAwesomeIcon icon="user" />
                        </CInputGroupText>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          onChange={(event) => {
                            setUsername(event.target.value)
                          }}
                        />
                      </CInputGroup>
                    </div>
                    <div className="col-md-12">
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <FontAwesomeIcon icon="envelope" />
                        </CInputGroupText>
                        <input
                          required
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={(event) => {
                            setEmail(event.target.value)
                          }}
                        />
                      </CInputGroup>
                    </div>
                    <div className="col-md-12">
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <FontAwesomeIcon icon="lock" />
                        </CInputGroupText>
                        <input
                          required
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(event) => {
                            setPassword(event.target.value)
                          }}
                        />
                      </CInputGroup>
                    </div>
                    <div className="col-md-12">
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <FontAwesomeIcon icon="lock" />
                        </CInputGroupText>
                        <input
                          required
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={(event) => {
                            setConfirmPassword(event.target.value)
                          }}
                        />
                      </CInputGroup>
                      <div className="text-danger" id="confirm_password_error"></div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-success btn-sm">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
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

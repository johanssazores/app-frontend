import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

  return (

    <div className="container">
      <div className="row" style={{marginTop: "5rem"}}>
        <h2>Registration</h2>

      <form>
        <div className="a-form">
          <div className="row">
            <h3>Select Barangay</h3>

            <div className="col-sm-12 col-md-6">
              <select type="text" className="form-control">
                <option value="">- SELECT  -</option>
                <option value="">Baragay 1</option>
                <option value="">Baragay 2</option>
                <option value="">Baragay 3</option>
                <option value="">Baragay 4</option>
              </select>
            </div>

            <div className="col-sm-12 col-md-12">
                <Link to="/register-2" className="btn btn-primary" href="">Next</Link>
            </div>

          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register
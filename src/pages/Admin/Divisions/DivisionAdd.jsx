import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const DivisionAdd = () => {

const [newDivision, setNewDivision] = useState({
  division: ""
})
const [isLoading, setIsLoading] = useState(false);

  const SubmitAddDivision = async e => {
    e.preventDefault();
    // console.log(newDivision)
    try {
      setIsLoading(true)
      const saveDivision = await axios.request(
        `${process.env.REACT_APP_BACKEND_URL}/division`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "division": newDivision.division,
          })
        }
      )
      console.log(saveDivision.data)

      alert('Division Added')
      window.location.href="/divisions"

    }
    catch(err) {
      console.error(err)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add Division</h1>
        <Link to="/divisions" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={SubmitAddDivision}>
            <div className="form-group">
              <label>Division</label>
              <input type="text"
                className="form-control"
                placeholder="Division"
                value={newDivision.division}
                onChange={e => setNewDivision({...newDivision, division: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Division</button>
          </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default DivisionAdd
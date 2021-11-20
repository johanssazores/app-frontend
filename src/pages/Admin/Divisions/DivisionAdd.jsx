import React from 'react'
import { Link } from 'react-router-dom';

const DivisionAdd = () => {

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add Division</h1>
        <Link to="/divisions" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="form-group">
              <label>Division</label>
              <input type="text" className="form-control" value="" placeholder="Division" />
            </div>
            <button type="submit" className="btn btn-primary">Add Division</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DivisionAdd
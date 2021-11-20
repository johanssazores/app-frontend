import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const DivisionEdit = () => {
  let {id} = useParams();
  const [division, setDivision] = useState({});

  useEffect(() => {
    async function getDivision() {
      const divisionGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/division/${id}`);
      setDivision(divisionGet.data);
    }
    getDivision();
  },[id]);

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit Division</h1>
        <Link to="/divisions" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
        <form>
          <div className="form-group">
            <label>Division</label>
            <input type="text" className="form-control" value={division.division} placeholder="Division" />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default DivisionEdit
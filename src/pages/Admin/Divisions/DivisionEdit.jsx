import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const DivisionEdit = () => {
  let {id} = useParams();

  const [updateDivision, setUpdateDivision] = useState({
    division: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDivision() {
      const divisionGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/division/${id}`);
      setUpdateDivision(divisionGet.data);
    }
    getDivision();
  },[id]);

  const SubmitUpdateDivision = async e => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const divisionUpdate = await axios.request(
        `${process.env.REACT_APP_BACKEND_URL}/division/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "division": updateDivision.updateDivision,
          })
        }
      )
      console.log(divisionUpdate.data)

      alert('Division Updated')
      window.location.href="/divisions"

    }
    catch(err) {
      console.error(err)
    }
    finally {
      setIsLoading(false)
    }
  }

  const onChangeUpdateDivision = (e) => {  
    e.persist();  
    setUpdateDivision({...updateDivision, [e.target.name]: e.target.value});  
  }  



  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit Division - {updateDivision.division}</h1>
        <Link to="/admin/divisions" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
        <form onSubmit={SubmitUpdateDivision}>
          <div className="form-group">
            <label>Division</label>
            <input
              type="text"
              className="form-control"
              placeholder="Division"
              value={updateDivision.division || ""}
              onChange={onChangeUpdateDivision}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Edit Division</button>
        </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default DivisionEdit